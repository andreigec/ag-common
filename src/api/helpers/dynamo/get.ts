/* eslint-disable no-await-in-loop */
import {
  BatchGetCommand,
  ExecuteStatementCommand,
  QueryCommand,
  ScanCommand,
} from '@aws-sdk/lib-dynamodb';

import type { Key } from '../../types';
import { withRetry } from '../withRetry';
import { dynamoDb } from '.';
import type { DynamoDBError, DynamoDBResult } from './types';
import type {
  DynamoBatchQueryParams,
  DynamoQueryParams,
  ScanOptions,
} from './types';

const isError = <T>(result: DynamoDBResult<T>): result is DynamoDBError =>
  'error' in result;

/**
 * Helper function that builds the query parameters and executes the query
 */
const executeQuery = async (
  params: DynamoQueryParams & {
    BATCH_SIZE?: number;
  },
  startKey?: Key,
) => {
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

  const queryParams = {
    TableName: params.tableName,
    KeyConditionExpression: kce,
    ExpressionAttributeNames: {
      ...ean,
      ...params.filter?.attrNames,
    },
    ExpressionAttributeValues: {
      ...eav,
      ...params.filter?.attrValues,
    },
    ScanIndexForward: params.sortAscending ?? true,
    Limit: params.BATCH_SIZE ?? params.limit,
    IndexName: params.indexName,
    ExclusiveStartKey: startKey,
    ...(params.filter && {
      FilterExpression: params.filter.filterExpression,
      ...(params.filter.attrValues && {
        ExpressionAttributeValues: {
          ...eav,
          ...params.filter.attrValues,
        },
      }),
    }),
  };

  return withRetry(
    () => dynamoDb.send(new QueryCommand(queryParams)),
    'queryDynamo',
    {
      maxRetries: params.maxRetries === undefined ? 3 : params.maxRetries,
    },
  );
};

/**
 * Helper function that builds the scan parameters and executes the scan
 */
const executeScan = async (
  tableName: string,
  options?: ScanOptions & {
    BATCH_SIZE?: number;
  },
  exclusiveStartKey?: Key,
) => {
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

  const scanParams = {
    TableName: tableName,
    IndexName: options?.indexName,
    Limit: options?.BATCH_SIZE,
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
  };

  return withRetry(
    () => dynamoDb.send(new ScanCommand(scanParams)),
    `scan. already seen=${exclusiveStartKey ? 'some' : '0'} items`,
    {
      maxRetries: options?.maxRetries === undefined ? 3 : options.maxRetries,
    },
  );
};

export const getItemsDynamo = async <T>(params: {
  tableName: string;
  items: { pkName: string; pkValue: string }[];
}): Promise<DynamoDBResult<T[]>> => {
  try {
    const batchGetParams = {
      RequestItems: {
        [params.tableName]: {
          Keys: params.items.map(({ pkName, pkValue }) => ({
            [pkName]: pkValue,
          })),
        },
      },
    };

    const result = await withRetry(
      () => dynamoDb.send(new BatchGetCommand(batchGetParams)),
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
): Promise<DynamoDBResult<T[]>> => {
  try {
    const items: T[] = [];
    let startKey: Key | undefined;

    do {
      const result = await executeQuery(params, startKey);

      if (result.Items) {
        items.push(...(result.Items as T[]));
      }

      startKey = result.LastEvaluatedKey;

      // If we have a limit and we've reached it, stop processing
      if (params.limit && items.length >= params.limit) {
        return {
          data: items.slice(0, params.limit),
        };
      }
    } while (startKey && Object.keys(startKey).length > 0);

    return { data: items };
  } catch (e) {
    return { error: (e as Error).toString() };
  }
};

export const scan = async <T>(
  tableName: string,
  options?: ScanOptions,
): Promise<DynamoDBResult<T[]>> => {
  try {
    const Items: T[] = [];
    let ExclusiveStartKey: Key | undefined;

    do {
      const result = await executeScan(tableName, options, ExclusiveStartKey);

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
 * Batch query DynamoDB using PartiQL to query multiple partition key values at once
 *
 * This function uses PartiQL's IN operator to query multiple partition key values
 * in a single request, which is more efficient than making multiple individual queries.
 *
 * Note: AWS has limits on the number of items in WHERE IN queries:
 * - Primary index: 100 items max
 * - Secondary index (GSI/LSI): 50 items max
 * This function automatically chunks requests to stay within these limits.
 *
 * @example
 * // Basic usage with multiple partition keys
 * const result = await batchQueryDynamo<User>({
 *   tableName: 'Users',
 *   pkName: 'userId',
 *   pkValues: ['user1', 'user2', 'user3']
 * });
 *
 * @example
 * // With filter and limit
 * const result = await batchQueryDynamo<Product>({
 *   tableName: 'Products',
 *   pkName: 'categoryId',
 *   pkValues: ['electronics', 'books'],
 *   filter: {
 *     filterExpression: 'price < :maxPrice',
 *     attrNames: {},
 *     attrValues: { ':maxPrice': 100 }
 *   },
 *   limit: 50
 * });
 *
 * @param params - The batch query parameters
 * @returns Promise resolving to query results or error
 */
export const batchQueryDynamo = async <T>(
  params: DynamoBatchQueryParams,
): Promise<DynamoDBResult<T[]>> => {
  try {
    if (params.pkValues.length === 0) {
      return { data: [] };
    }

    // Determine chunk size based on whether we're using a secondary index
    const isSecondaryIndex = !!params.indexName;
    const chunkSize = isSecondaryIndex ? 50 : 100;

    // Chunk the partition key values
    const chunks: (string | number)[][] = [];
    for (let i = 0; i < params.pkValues.length; i += chunkSize) {
      chunks.push(params.pkValues.slice(i, i + chunkSize));
    }

    const allItems: T[] = [];
    let totalProcessed = 0;

    // Process each chunk
    for (const chunk of chunks) {
      const result = await executePartiQLQuery<T>({
        ...params,
        pkValues: chunk,
      });

      if ('error' in result) {
        return result;
      }

      allItems.push(...result.data);
      totalProcessed += result.data.length;

      // If we have a limit and we've reached it, stop processing
      if (params.limit && totalProcessed >= params.limit) {
        return {
          data: allItems.slice(0, params.limit),
        };
      }
    }

    return {
      data: allItems,
    };
  } catch (e) {
    return { error: (e as Error).toString() };
  }
};

/**
 * Helper function to execute a single PartiQL query for a chunk of partition keys
 */
const executePartiQLQuery = async <T>(
  params: DynamoBatchQueryParams,
): Promise<DynamoDBResult<T[]>> => {
  try {
    // Build the PartiQL WHERE clause for multiple partition keys
    const pkPlaceholders = params.pkValues.map(() => '?').join(', ');
    let whereClause = `"${params.pkName}" IN (${pkPlaceholders})`;

    // Build parameters array for PartiQL (positional parameters)
    const parameters: unknown[] = [...params.pkValues];

    // Add filter conditions if provided
    if (params.filter) {
      // For filters, we need to replace the named parameters with positional ones
      let filterExpression = params.filter.filterExpression;
      if (params.filter.attrValues) {
        Object.entries(params.filter.attrValues).forEach(([key, value]) => {
          filterExpression = filterExpression.replace(
            new RegExp(key.replace(':', '\\:'), 'g'),
            '?',
          );
          parameters.push(value);
        });
      }
      whereClause += ` AND ${filterExpression}`;
    }

    // Build the PartiQL statement
    const tableName = params.indexName
      ? `"${params.tableName}"."${params.indexName}"`
      : `"${params.tableName}"`;
    const statement = `SELECT * FROM ${tableName} WHERE ${whereClause}`;

    const allItems: T[] = [];
    let nextToken: string | undefined;

    // Loop until all results are retrieved
    do {
      const executeParams = {
        Statement: statement,
        Parameters: parameters,
        Limit: params.limit,
        NextToken: nextToken,
      };

      const result = await withRetry(
        () => dynamoDb.send(new ExecuteStatementCommand(executeParams)),
        'batchQueryDynamo',
      );

      if (result.Items) {
        allItems.push(...(result.Items as T[]));
      }

      nextToken = result.NextToken;

      // If we have a limit and we've reached it, stop processing
      if (params.limit && allItems.length >= params.limit) {
        return {
          data: allItems.slice(0, params.limit),
        };
      }
    } while (nextToken);

    return {
      data: allItems,
    };
  } catch (e) {
    return { error: (e as Error).toString() };
  }
};

export async function* queryWithGenerator<T>(
  params: DynamoQueryParams & {
    /** how many to return in query generator. default 100 */
    BATCH_SIZE?: number;
  },
): AsyncGenerator<T[], void, unknown> {
  const BATCH_SIZE = params.BATCH_SIZE ?? 100;
  let items: T[] = [];
  let startKey: Key | undefined;

  try {
    do {
      const result = await executeQuery(params, startKey);

      if (result.Items) {
        items.push(...(result.Items as T[]));

        // Process items in chunks of BATCH_SIZE
        while (items.length >= BATCH_SIZE) {
          const batch = items.slice(0, BATCH_SIZE);
          items = items.slice(BATCH_SIZE);
          yield batch;
        }
      }

      startKey = result.LastEvaluatedKey;
    } while (startKey && Object.keys(startKey).length > 0);

    // Yield any remaining items
    if (items.length > 0) {
      yield items;
    }
  } catch (e) {
    throw new Error(`Query generator error: ${(e as Error).toString()}`);
  }
}

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
    do {
      const result = await executeScan(tableName, options, exclusiveStartKey);

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
