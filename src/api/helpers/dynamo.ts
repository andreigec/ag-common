/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable prefer-const */

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

// ES6 import
import { chunk, take } from '../../common/helpers/array';
import { asyncForEach } from '../../common/helpers/async';
import { debug, warn } from '../../common/helpers/log';
import { sleep } from '../../common/helpers/sleep';
import { trimSide } from '../../common/helpers/string/trim';
import type { IQueryDynamo, Key } from '../types';

export const setDynamo = (
  region: string,
  credentials?: AwsCredentialIdentity,
) => {
  let raw = new DynamoDBClient({ region, credentials });
  const ddbDocClient = DynamoDBDocument.from(raw, {
    marshallOptions: { removeUndefinedValues: true },
  });
  dynamoDb = ddbDocClient;
  return ddbDocClient;
};

export let dynamoDb = setDynamo('ap-southeast-2');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const putDynamo = async <T extends Record<string, any>>(
  item: T,
  tableName: string,
  opt?: {
    /** if provided, will assert this PK value doesnt already exist */
    pkName?: string;
  },
): Promise<{ error?: string }> => {
  let params = new PutCommand({
    TableName: tableName,
    Item: item,
    ...(opt?.pkName && {
      ConditionExpression: `attribute_not_exists(${opt.pkName})`,
    }),
  });

  debug(`running dynamo put=${JSON.stringify(params, null, 2)}`);

  try {
    await dynamoDb.send(params);

    return {};
  } catch (e) {
    warn('putDynamo error', e);
    return { error: (e as Error).toString() };
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const batchWrite = async <T extends Record<string, any>>(
  tableName: string,
  itemsIn: T[],
): Promise<{ error?: string }> => {
  //batch up to 20, so we can retry.
  let chunked = chunk(itemsIn, 20);

  try {
    await asyncForEach(chunked, async (items) => {
      let retryCount = 0;
      let retryMax = 3;
      let params = new BatchWriteCommand({
        RequestItems: {
          [`${tableName}`]: items.map((Item) => ({
            PutRequest: { Item: Item },
          })),
        },
      });

      debug(`running dynamo batchWrite=${JSON.stringify(params, null, 2)}`);

      try {
        await dynamoDb.send(params);

        return {};
      } catch (e) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let es = (e as any).toString();
        let msg = es;
        warn('dynamo write error', msg);

        if (
          es.indexOf('429') !== -1 ||
          es.indexOf('ProvisionedThroughputExceeded') !== -1
        ) {
          retryCount += 1;
          msg = `batch write throttled. retry ${retryCount}/${retryMax}`;
        } else {
          throw e;
        }

        if (retryCount >= retryMax) {
          throw e;
        }

        warn(`dynamo retry ${retryCount}/${retryMax}`);
        await sleep(2000);
      }
    });
    return {};
  } catch (e) {
    warn('batchWrite error', e);
    return { error: (e as Error).toString() };
  }
};

export const batchDelete = async ({
  tableName,
  keys,
  pkName,
}: {
  tableName: string;
  keys: string[];
  pkName: string;
}): Promise<{ error?: string }> => {
  //batch up to 20, so we can retry.
  let chunked = chunk(keys, 20);

  try {
    await asyncForEach(chunked, async (items) => {
      let retryCount = 0;
      let retryMax = 3;
      let params = new BatchWriteCommand({
        RequestItems: {
          [`${tableName}`]: items.map((key) => ({
            DeleteRequest: { Key: { [`${pkName}`]: key } },
          })),
        },
      });

      debug(`running dynamo batch delete=${JSON.stringify(params, null, 2)}`);

      try {
        await dynamoDb.send(params);

        return {};
      } catch (e) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let es = (e as any).toString();
        let msg = es;
        warn('dynamo write error', msg);

        if (
          es.indexOf('429') !== -1 ||
          es.indexOf('ProvisionedThroughputExceeded') !== -1
        ) {
          retryCount += 1;
          msg = `batch delete write throttled. retry ${retryCount}/${retryMax}`;
        } else {
          throw e;
        }

        if (retryCount >= retryMax) {
          throw e;
        }

        warn(`dynamo retry ${retryCount}/${retryMax}`);
        await sleep(2000);
      }
    });
    return {};
  } catch (e) {
    warn('batchDelete error', e);
    return { error: (e as Error).toString() };
  }
};

export const scan = async <T>(
  tableName: string,
  opt?: {
    filter?: {
      filterExpression: string;
      attrNames: Record<string, string>;
      attrValues?: Record<string, string>;
    };
    /** ProjectionExpression. will csv values */
    requiredAttributeList?: string[];
    /** default =ALL */
    limit?: number;
  },
): Promise<{ data: T[] } | { error: string }> => {
  try {
    let ExclusiveStartKey: Key | undefined;
    let Items: T[] = [];
    do {
      let params = new ScanCommand({
        TableName: tableName,
        ...(opt?.filter && {
          FilterExpression: opt.filter.filterExpression,
          ExpressionAttributeNames: opt.filter.attrNames,
          ...(opt.filter.attrValues && {
            ExpressionAttributeValues: opt.filter.attrValues,
          }),
        }),
        ...(opt?.requiredAttributeList && {
          ProjectionExpression: opt.requiredAttributeList.join(', '),
        }),
        ExclusiveStartKey,
        ...(opt?.limit && { Limit: opt.limit }),
      });

      debug(`running dynamo scan=${JSON.stringify(params, null, 2)}`);

      const {
        Items: newitems,
        LastEvaluatedKey,
        // eslint-disable-next-line no-await-in-loop
      } = await dynamoDb.send(params);

      ExclusiveStartKey = LastEvaluatedKey;

      if (newitems) {
        Items.push(...newitems.map((r) => r as T));
      }
    } while (ExclusiveStartKey && (!opt?.limit || Items.length < opt.limit));

    if (opt?.limit) {
      ({ part: Items } = take(Items, opt?.limit));
    }

    debug(`dynamo scan against ${tableName} ok, count=${Items?.length}`);

    return { data: Items };
  } catch (e) {
    warn('scan error:', e);
    return { error: (e as Error).toString() };
  }
};

export const getItemsDynamo = async <T>({
  tableName,
  items,
}: {
  items: {
    pkName: string;
    pkValue: string;
  }[];
  tableName: string;
}): Promise<{ data: T[] } | { error: string }> => {
  const params = new BatchGetCommand({
    RequestItems: {
      [tableName]: {
        Keys: items.map(({ pkName, pkValue }) => ({
          [pkName]: pkValue,
        })),
      },
    },
  });

  try {
    let res = await dynamoDb.send(params);
    let data = res.Responses?.[tableName].map((r) => r as T) ?? [];
    return { data };
  } catch (e) {
    warn('getItemsDynamo error:', e);
    return { error: (e as Error).toString() };
    //
  }
};

export const getItemDynamo = async <T>({
  tableName,
  pkName,
  pkValue,
}: {
  pkName: string;
  pkValue: string;
  tableName: string;
}): Promise<{ data: T } | { error: string }> => {
  let r = await getItemsDynamo<T>({ tableName, items: [{ pkName, pkValue }] });
  if ('error' in r) {
    return { error: r.error };
  }

  return { data: r.data[0] };
};
export const queryDynamo = async <T>({
  tableName,
  pkName,
  pkValue,
  pkOperator = '=',
  skName,
  skValue,
  skOperator = '=',
  indexName,
  limit = 1000,
  startKey,
  filterName,
  filterValue,
  filterOperator = '=',
  sortAscending = true,
}: IQueryDynamo): Promise<
  | {
      data: T[];
      startKey?: Key;
    }
  | {
      error: string;
    }
> => {
  let kce = `#${pkName.toLowerCase()} ${pkOperator} :${pkName.toLowerCase()}`;
  const ean = { [`#${pkName.toLowerCase()}`]: pkName };
  const eav = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [`:${pkName.toLowerCase()}`]: pkValue as any,
  };

  if (skName) {
    if (skOperator === 'BETWEEN') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let [sp0, sp1] = skValue as any[];
      const skName1 = `${skName.toLowerCase()}1`;
      const skName2 = `${skName.toLowerCase()}2`;
      kce += ` and #${skName.toLowerCase()} ${skOperator} :${skName1.toLowerCase()} AND :${skName2.toLowerCase()}`;
      ean[`#${skName.toLowerCase()}`] = skName;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      eav[`:${skName1}`] = sp0 as any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      eav[`:${skName2}`] = sp1 as any;
    } else if (skOperator === 'BEGINS_WITH') {
      kce += ` and ${skOperator.toLowerCase()}(#${skName.toLowerCase()}, :${skName.toLowerCase()})`;
      ean[`#${skName.toLowerCase()}`] = skName;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      eav[`:${skName.toLowerCase()}`] = skValue as any;
    } else {
      kce += ` and #${skName.toLowerCase()} ${skOperator} :${skName.toLowerCase()}`;
      ean[`#${skName.toLowerCase()}`] = skName;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      eav[`:${skName.toLowerCase()}`] = skValue as any;
    }
  }

  let FilterExpression: string | undefined;
  if (filterName) {
    ean[`#${filterName.toLowerCase()}`] = filterName;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    eav[`:${filterName.toLowerCase()}`] = filterValue as any;
    FilterExpression = `#${filterName.toLowerCase()} ${filterOperator} :${filterName.toLowerCase()}`;
    if (filterOperator === 'contains') {
      FilterExpression = `contains(#${filterName.toLowerCase()}, :${filterName.toLowerCase()})`;
    }
  }

  const Items: T[] = [];

  do {
    const params = new QueryCommand({
      TableName: tableName,
      KeyConditionExpression: kce,
      ExpressionAttributeNames: ean,
      ExpressionAttributeValues: eav,
      ScanIndexForward: sortAscending,
      ...(limit !== null && { Limit: limit || 1000 }),
      ...(indexName && { IndexName: indexName }),
      ...(startKey && {
        ExclusiveStartKey: startKey,
      }),
      ...(FilterExpression && { FilterExpression }),
    });

    let lek: Key | undefined;
    let newItems: Key[] | undefined;

    try {
      ({
        Items: newItems,
        LastEvaluatedKey: lek,

        // eslint-disable-next-line no-await-in-loop
      } = await dynamoDb.send(params));
      if (newItems) {
        Items.push(...newItems.map((i) => i as T));
      }
    } catch (e) {
      warn('error. query params=', JSON.stringify(params), e);
      return { error: (e as Error).toString() };
    }

    startKey = lek;

    debug(
      `dynamo query against ${
        params?.input.TableName
      } ok, count=${newItems?.length} ${JSON.stringify(params)}`,
      ` next startkey=${startKey}`,
    );

    if (!!limit && Items.length > limit) {
      return { data: Items, startKey };
    }
  } while (startKey && Object.keys(startKey).length > 0);

  return { data: Items };
};

export const getDynamoTtlDays = (days: number) =>
  Math.ceil(new Date().getTime() / 1000) + days * 86400;

export const getDynamoTtlMinutes = (mins: number) =>
  Math.ceil(new Date().getTime() / 1000) + mins * 60;

export const wipeTable = async (
  tableName: string,
): Promise<{ error?: string }> => {
  try {
    let infoV = await dynamoDb.send(
      new DescribeTableCommand({ TableName: tableName }),
    );

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let keyHash = infoV.Table.KeySchema.find(
      (k) => k.KeyType === 'HASH',
    ).AttributeName;
    if (!keyHash) {
      throw new Error('couldnt find keyHash');
    }

    let allraw = await scan(tableName);
    if ('error' in allraw) {
      throw allraw.error;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let all = allraw?.data?.map((d) => d as any) || [];

    warn(`will delete ${all?.length} items from ${tableName}`);

    await batchDelete({
      tableName,
      keys: all.map((s) => s[keyHash as string]),
      pkName: 'PK',
    });
    warn(`cleared table ${tableName}`);
    return {};
  } catch (e) {
    warn('wipeTable error:', e);
    return { error: (e as Error).toString() };
  }
};

/** gets all fields in dynamokeys, and moves them into update expressions. eg will turn item.yourFieldName, into a dynamo write into field "yourFieldName" */
export const getDynamoUpdates = (
  item: Record<string, string | number | boolean>,
  opt?: {
    /** default PK. will also exclude null or undefined */
    excludeKeys?: string[];
  },
): {
  UpdateExpression: string;
  ExpressionAttributeNames: Record<string, string>;
  ExpressionAttributeValues: Record<string, string | number | boolean>;
  ReturnValues: 'UPDATED_NEW';
} => {
  let ek = opt?.excludeKeys ?? ['PK'];
  ek = ek.map((r) => r.toLowerCase());
  let UpdateExpression = `SET `;
  const ExpressionAttributeNames: Record<string, string> = {};
  const ExpressionAttributeValues: Record<string, string | number | boolean> =
    {};
  //
  const cleanedKeys = Object.entries(item).filter(
    ([k]) => !ek.includes(k.toLowerCase()),
  );
  cleanedKeys
    .filter(([_k, v]) => v !== null && v !== undefined)
    .forEach(([k, v]) => {
      UpdateExpression += `#${k} = :${k}, `;
      ExpressionAttributeNames[`#${k}`] = k;
      ExpressionAttributeValues[`:${k}`] = v;
    });
  return {
    UpdateExpression: trimSide(UpdateExpression, false, ' ', ','),
    ExpressionAttributeNames,
    ExpressionAttributeValues,
    ReturnValues: 'UPDATED_NEW',
  };
};
