import { DescribeTableCommand, DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  BatchGetCommand,
  BatchWriteCommand,
  DynamoDBDocument,
  PutCommand,
  QueryCommand,
  ScanCommand,
} from '@aws-sdk/lib-dynamodb';
import type { AwsCredentialIdentity } from '@smithy/types';

import { chunk } from '../../common/helpers/array';
import { asyncForEach } from '../../common/helpers/async';
import { withRetry } from './withRetry';

type DynamoDBError = {
  error: string;
};

type DynamoDBSuccess<T> = {
  data: T;
};

type DynamoDBResult<T> = DynamoDBSuccess<T> | DynamoDBError;

interface Key {
  [key: string]: string | number;
}

interface DynamoFilter {
  filterExpression: string;
  attrNames: Record<string, string>;
  attrValues?: Record<string, unknown>;
}

interface ScanOptions {
  /** eg
   * filter: {
      filterExpression: '#feedIcon = :empty',
      attrNames: { '#feedIcon': 'feedIcon' },
      attrValues: {
        ':empty': '',
      },
    },
   */
  filter?: DynamoFilter;
  requiredAttributeList?: string[];
  indexName?: string;
}

interface DynamoQueryParams {
  tableName: string;
  pkName: string;
  pkValue: string | number;
  pkOperator?: '=' | '<' | '>' | '<=' | '>=';
  skName?: string;
  skValue?: string | number | [string | number, string | number];
  skOperator?: '=' | '<' | '>' | '<=' | '>=' | 'BETWEEN' | 'BEGINS_WITH';
  indexName?: string;
  limit?: number;
  startKey?: Key;
  filterName?: string;
  filterValue?: unknown;
  filterOperator?: string;
  sortAscending?: boolean;
}

const isError = <T>(result: DynamoDBResult<T>): result is DynamoDBError =>
  'error' in result;

export let dynamoDb: DynamoDBDocument;

/**
 * Sets up the DynamoDB client with the specified region and credentials.
 * @param region - AWS region to connect to
 * @param credentials - Optional AWS credentials
 * @returns Configured DynamoDBDocument client
 */
export const setDynamo = (
  region: string,
  credentials?: AwsCredentialIdentity,
): DynamoDBDocument => {
  const client = new DynamoDBClient({ region, credentials });
  dynamoDb = DynamoDBDocument.from(client, {
    marshallOptions: { removeUndefinedValues: true },
  });
  return dynamoDb;
};

dynamoDb = setDynamo('ap-southeast-2');

/**
 * Puts a single item into a DynamoDB table.
 * @param item - The item to put into the table
 * @param tableName - Name of the DynamoDB table
 * @param opt - Optional parameters including primary key name for conditional put
 * @returns Promise resolving to void on success or error message on failure
 */
export const putDynamo = async <T extends Record<string, unknown>>(
  item: T,
  tableName: string,
  opt?: { pkName?: string },
): Promise<DynamoDBResult<void>> => {
  const params = new PutCommand({
    TableName: tableName,
    Item: item,
    ...(opt?.pkName && {
      ConditionExpression: `attribute_not_exists(${opt.pkName})`,
    }),
  });

  try {
    await withRetry(() => dynamoDb.send(params), 'putDynamo');
    return { data: undefined };
  } catch (e) {
    return { error: (e as Error).toString() };
  }
};

/**
 * Writes multiple items to a DynamoDB table in batches.
 * Automatically chunks items into batches of 20 (or specified size) to comply with DynamoDB limits.
 * @param tableName - Name of the DynamoDB table
 * @param items - Array of items to write
 * @param opt - Optional parameters including batch size and retry behavior
 * @returns Promise resolving to void on success or error message on failure
 */
export const batchWrite = async <T extends Record<string, unknown>>(
  tableName: string,
  items: T[],
  opt?: {
    /** option to always retry on 429 until done */
    alwaysRetry?: boolean;
    /** default 20 */
    batchSize?: number;
  },
): Promise<DynamoDBResult<void>> => {
  try {
    const { batchSize = 20 } = opt ?? {};

    const chunked = chunk(items, batchSize);
    await asyncForEach(chunked, async (chunk) => {
      const params = new BatchWriteCommand({
        RequestItems: {
          [tableName]: chunk.map((Item) => ({ PutRequest: { Item } })),
        },
      });
      await withRetry(() => dynamoDb.send(params), 'batchWrite', {
        maxRetries: opt?.alwaysRetry ? null : undefined,
      });
    });
    return { data: undefined };
  } catch (e) {
    return { error: (e as Error).toString() };
  }
};

/**
 * Deletes multiple items from a DynamoDB table in batches.
 * Automatically chunks keys into batches of 20 (or specified size) to comply with DynamoDB limits.
 * @param params - Parameters including table name, keys to delete, and options
 * @returns Promise resolving to void on success or error message on failure
 */
export const batchDelete = async (params: {
  tableName: string;
  keys: string[];
  pkName: string;
  opt?: {
    /** default 20 */
    batchSize?: number;
    /** option to always retry on 429 until done. default false */
    alwaysRetry?: boolean;
  };
}): Promise<DynamoDBResult<void>> => {
  try {
    const { batchSize = 20, alwaysRetry = false } = params.opt ?? {};
    const chunked = chunk(params.keys, batchSize);
    await asyncForEach(chunked, async (chunk) => {
      const command = new BatchWriteCommand({
        RequestItems: {
          [params.tableName]: chunk.map((key) => ({
            DeleteRequest: { Key: { [params.pkName]: key } },
          })),
        },
      });
      await withRetry(() => dynamoDb.send(command), 'batchDelete', {
        maxRetries: alwaysRetry ? null : undefined,
      });
    });
    return { data: undefined };
  } catch (e) {
    return { error: (e as Error).toString() };
  }
};

/**
 * Scans a DynamoDB table and returns all matching items.
 * Handles pagination automatically and supports filtering and projection.
 * @param tableName - Name of the DynamoDB table
 * @param options - Optional parameters for filtering, projection, and index usage
 * @returns Promise resolving to array of items on success or error message on failure
 */
export const scan = async <T>(
  tableName: string,
  options?: ScanOptions,
): Promise<DynamoDBResult<T[]>> => {
  try {
    const Items: T[] = [];
    let ExclusiveStartKey: Key | undefined;

    const projectionAttrs = options?.requiredAttributeList?.reduce<
      Record<string, string>
    >((acc, attr, index) => {
      acc[`#proj${index}`] = attr;
      return acc;
    }, {});

    const expressionAttributeNames = {
      ...projectionAttrs,
      ...options?.filter?.attrNames,
    };

    do {
      const params = new ScanCommand({
        TableName: tableName,
        IndexName: options?.indexName,
        ...(options?.filter && {
          FilterExpression: options.filter.filterExpression,
          ...(options.filter.attrValues && {
            ExpressionAttributeValues: options.filter.attrValues,
          }),
        }),
        ...(Object.keys(expressionAttributeNames).length > 0 && {
          ExpressionAttributeNames: expressionAttributeNames,
        }),
        ...(options?.requiredAttributeList && {
          ProjectionExpression: options.requiredAttributeList
            .map((_, index) => `#proj${index}`)
            .join(', '),
        }),
        ExclusiveStartKey,
      });

      const result = await withRetry(() => dynamoDb.send(params), 'scan');

      if (result.Items) {
        Items.push(...(result.Items as T[]));
      }

      ExclusiveStartKey = result.LastEvaluatedKey;
    } while (ExclusiveStartKey);

    return { data: Items };
  } catch (e) {
    return { error: (e as Error).toString() };
  }
};

/**
 * Scans a DynamoDB table and yields items in batches.
 * Useful for processing large tables without loading all items into memory.
 * @param tableName - Name of the DynamoDB table
 * @param options - Optional parameters including batch size, filtering, and projection
 * @returns AsyncGenerator yielding batches of items
 * @throws Error if the scan operation fails
 */
export async function* scanWithGenerator<T>(
  tableName: string,
  options?: ScanOptions & {
    /** how many to return in scan generator. default 100 */
    BATCH_SIZE?: number;
  },
): AsyncGenerator<T[], void, unknown> {
  const BATCH_SIZE = options?.BATCH_SIZE ?? 100;
  let items: T[] = [];
  let exclusiveStartKey: Key | undefined;

  try {
    const projectionAttrs = options?.requiredAttributeList?.reduce<
      Record<string, string>
    >((acc, attr, index) => {
      acc[`#proj${index}`] = attr;
      return acc;
    }, {});

    const expressionAttributeNames = {
      ...projectionAttrs,
      ...options?.filter?.attrNames,
    };

    do {
      const params = new ScanCommand({
        TableName: tableName,
        IndexName: options?.indexName,
        Limit: BATCH_SIZE,
        ...(options?.filter && {
          FilterExpression: options.filter.filterExpression,
          ...(options.filter.attrValues && {
            ExpressionAttributeValues: options.filter.attrValues,
          }),
        }),
        ...(Object.keys(expressionAttributeNames).length > 0 && {
          ExpressionAttributeNames: expressionAttributeNames,
        }),
        ...(options?.requiredAttributeList && {
          ProjectionExpression: options.requiredAttributeList
            .map((_, index) => `#proj${index}`)
            .join(', '),
        }),
        ExclusiveStartKey: exclusiveStartKey,
      });

      const result = await withRetry(
        () => dynamoDb.send(params),
        'scanWithGenerator',
      );

      if (result.Items) {
        items.push(...(result.Items as T[]));

        // Process items in chunks of BATCH_SIZE
        while (items.length >= BATCH_SIZE) {
          const batch = items.slice(0, BATCH_SIZE);
          items = items.slice(BATCH_SIZE);
          yield batch;
        }
      }

      exclusiveStartKey = result.LastEvaluatedKey;
    } while (exclusiveStartKey);

    // Yield any remaining items
    if (items.length > 0) {
      yield items;
    }
  } catch (e) {
    throw new Error(`Scan generator error: ${(e as Error).toString()}`);
  }
}

export const getItemsDynamo = async <T>(params: {
  tableName: string;
  items: { pkName: string; pkValue: string }[];
}): Promise<DynamoDBResult<T[]>> => {
  try {
    const command = new BatchGetCommand({
      RequestItems: {
        [params.tableName]: {
          Keys: params.items.map(({ pkName, pkValue }) => ({
            [pkName]: pkValue,
          })),
        },
      },
    });

    const result = await withRetry(
      () => dynamoDb.send(command),
      'getItemsDynamo',
    );
    return {
      data: (result.Responses?.[params.tableName] as T[] | undefined) ?? [],
    };
  } catch (e) {
    return { error: (e as Error).toString() };
  }
};

export const getItemDynamo = async <T>(params: {
  tableName: string;
  pkName: string;
  pkValue: string;
}): Promise<DynamoDBResult<T>> => {
  const result = await getItemsDynamo<T>({
    tableName: params.tableName,
    items: [{ pkName: params.pkName, pkValue: params.pkValue }],
  });

  if (isError(result)) {
    return result;
  }

  return { data: result.data[0] };
};

export const queryDynamo = async <T>(
  params: DynamoQueryParams,
): Promise<
  | {
      data: T[];
      startKey?: Key;
    }
  | {
      error: string;
    }
> => {
  try {
    let kce = `#${params.pkName.toLowerCase()} ${params.pkOperator ?? '='} :${params.pkName.toLowerCase()}`;
    const ean: Record<string, string> = {
      [`#${params.pkName.toLowerCase()}`]: params.pkName,
    };
    const eav: Record<string, unknown> = {
      [`:${params.pkName.toLowerCase()}`]: params.pkValue,
    };

    if (params.skName && params.skValue !== undefined) {
      const { skName, skValue, skOperator = '=' } = params;
      if (skOperator === 'BETWEEN' && Array.isArray(skValue)) {
        const [start, end] = skValue;
        kce += ` AND #${skName.toLowerCase()} BETWEEN :${skName}1 AND :${skName}2`;
        ean[`#${skName.toLowerCase()}`] = skName;
        eav[`:${skName}1`] = start;
        eav[`:${skName}2`] = end;
      } else if (skOperator === 'BEGINS_WITH') {
        kce += ` AND begins_with(#${skName.toLowerCase()}, :${skName.toLowerCase()})`;
        ean[`#${skName.toLowerCase()}`] = skName;
        eav[`:${skName.toLowerCase()}`] = skValue;
      } else {
        kce += ` AND #${skName.toLowerCase()} ${skOperator} :${skName.toLowerCase()}`;
        ean[`#${skName.toLowerCase()}`] = skName;
        eav[`:${skName.toLowerCase()}`] = skValue;
      }
    }

    let FilterExpression: string | undefined;
    if (params.filterName && params.filterValue !== undefined) {
      ean[`#${params.filterName.toLowerCase()}`] = params.filterName;
      eav[`:${params.filterName.toLowerCase()}`] = params.filterValue;

      FilterExpression =
        params.filterOperator === 'contains'
          ? `contains(#${params.filterName.toLowerCase()}, :${params.filterName.toLowerCase()})`
          : `#${params.filterName.toLowerCase()} ${params.filterOperator ?? '='} :${params.filterName.toLowerCase()}`;
    }

    const items: T[] = [];
    let { startKey } = params;

    do {
      const queryParams = new QueryCommand({
        TableName: params.tableName,
        KeyConditionExpression: kce,
        ExpressionAttributeNames: ean,
        ExpressionAttributeValues: eav,
        ScanIndexForward: params.sortAscending ?? true,
        Limit: params.limit,
        IndexName: params.indexName,
        ExclusiveStartKey: startKey,
        FilterExpression,
      });

      const result = await withRetry(
        () => dynamoDb.send(queryParams),
        'queryDynamo',
      );

      if (result.Items) {
        items.push(...(result.Items as T[]));
      }

      startKey = result.LastEvaluatedKey;

      if (params.limit && items.length >= params.limit) {
        return {
          data: items.slice(0, params.limit),
          startKey,
        };
      }
    } while (startKey && Object.keys(startKey).length > 0);

    return { data: items };
  } catch (e) {
    return { error: (e as Error).toString() };
  }
};

export const getDynamoTtlDays = (days: number): number =>
  Math.ceil(Date.now() / 1000) + days * 86400;

export const getDynamoTtlMinutes = (minutes: number): number =>
  Math.ceil(Date.now() / 1000) + minutes * 60;

export const wipeTable = async (
  tableName: string,
): Promise<DynamoDBResult<void>> => {
  try {
    const info = await withRetry(
      () => dynamoDb.send(new DescribeTableCommand({ TableName: tableName })),
      'wipeTable-describe',
    );

    const keyHash = info.Table?.KeySchema?.find(
      (k) => k.KeyType === 'HASH',
    )?.AttributeName;

    if (!keyHash) {
      throw new Error('Could not find hash key');
    }

    const scanResult = await scan<any>(tableName);
    if (isError(scanResult)) {
      throw new Error(scanResult.error);
    }

    await batchDelete({
      tableName,
      keys: scanResult.data.map((item) => item[keyHash]),
      pkName: keyHash,
    });

    return { data: undefined };
  } catch (e) {
    return { error: (e as Error).toString() };
  }
};

export const getDynamoUpdates = <T extends Record<string, unknown>>(
  item: T,
  options?: { excludeKeys?: string[] },
): {
  UpdateExpression: string;
  ExpressionAttributeNames: Record<string, string>;
  ExpressionAttributeValues: Record<string, unknown>;
  ReturnValues: 'UPDATED_NEW';
} => {
  const excludeKeys = (options?.excludeKeys ?? ['PK']).map((k) =>
    k.toLowerCase(),
  );

  const validEntries = Object.entries(item).filter(
    ([key, value]) => !excludeKeys.includes(key.toLowerCase()) && value != null,
  );

  const ExpressionAttributeNames: Record<string, string> = {};
  const ExpressionAttributeValues: Record<string, unknown> = {};

  const UpdateExpression = validEntries.reduce((expr, [key, value], index) => {
    ExpressionAttributeNames[`#${key}`] = key;
    ExpressionAttributeValues[`:${key}`] = value;
    return `${expr}${index > 0 ? ', ' : ''}#${key} = :${key}`;
  }, 'SET ');

  return {
    UpdateExpression,
    ExpressionAttributeNames,
    ExpressionAttributeValues,
    ReturnValues: 'UPDATED_NEW',
  };
};
