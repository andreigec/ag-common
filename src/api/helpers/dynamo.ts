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

// ES6 import
import { chunk } from '../../common/helpers/array';
import { asyncForEach } from '../../common/helpers/async';
import { debug, warn } from '../../common/helpers/log';
import { sleep } from '../../common/helpers/sleep';
import { DYNAMOKEYS, IQueryDynamo, Key } from '../types';

export const setDynamo = (region: string) => {
  let raw = new DynamoDBClient({ region });
  const ddbDocClient = DynamoDBDocument.from(raw);
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
    let r1 = await dynamoDb.send(params);
    console.log('r1=', r1);

    return {};
  } catch (e) {
    warn('put error', e);
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
};

export const batchDelete = async ({
  tableName,
  keys,
  pkName,
}: {
  tableName: string;
  keys: string[];
  pkName: string;
}) => {
  //batch up to 20, so we can retry.
  let chunked = chunk(keys, 20);

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
};

export const scan = async <T>(
  tableName: string,
): Promise<{ data?: T[]; error?: string }> => {
  let params = new ScanCommand({
    TableName: tableName,
  });

  debug(`running dynamo scan=${JSON.stringify(params, null, 2)}`);

  try {
    let ret = await dynamoDb.send(params);

    let items = (ret.Items ?? []).map((r) => r as T);
    return { data: items };
  } catch (e) {
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
}): Promise<{ data?: T[]; error?: string }> => {
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
    warn('get error:', e);
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
}): Promise<{ data?: T; error?: string }> => {
  let r = await getItemsDynamo<T>({ tableName, items: [{ pkName, pkValue }] });
  return { data: r.data?.[0], error: r.error };
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
  count = 1000,
  startKeyPk,
  filterName,
  filterValue,
  filterOperator = '=',
  sortAscending = true,
}: IQueryDynamo): Promise<{
  Items?: T[];
  startKey?: Key;
  error?: string;
}> => {
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
  let startKey: Key | undefined = startKeyPk
    ? { [`${pkName}`]: { S: startKeyPk } }
    : undefined;
  do {
    const params = new QueryCommand({
      TableName: tableName,
      KeyConditionExpression: kce,
      ExpressionAttributeNames: ean,
      ExpressionAttributeValues: eav,
      ...(startKey && {
        ExclusiveStartKey: startKey,
      }),
      ...(FilterExpression && { FilterExpression }),
      ScanIndexForward: sortAscending,
      Limit: count > 0 ? count : 1000,
      ...(indexName && { IndexName: indexName }),
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
      `dynamo query against ${params?.input
        .TableName} ok, count=${newItems?.length} ${JSON.stringify(params)}`,
      ` next startkey=${startKey}`,
    );

    if (count > 0 && (newItems?.length ?? 0) >= count) {
      return { Items, startKey };
    }
  } while (startKey && Object.keys(startKey).length > 0);

  return { Items, startKey: undefined };
};

export const getDynamoTtlDays = (days: number) =>
  Math.ceil(new Date().getTime() / 1000) + days * 86400;

export const getDynamoTtlMinutes = (mins: number) =>
  Math.ceil(new Date().getTime() / 1000) + mins * 60;

export const wipeTable = async (
  tableName: string,
): Promise<{ errors?: string[] }> => {
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let all = (await scan(tableName))?.data?.map((d) => d as any) || [];

  warn(`will delete ${all?.length} items from ${tableName}`);

  await batchDelete({
    tableName,
    keys: all.map((s) => s[keyHash as string]),
    pkName: 'PK',
  });
  warn(`cleared table ${tableName}`);
  return {};
};

export const getDynamoUpdates = (items: DYNAMOKEYS) => {
  const cleanedKeys = Object.keys(items).filter((r) => r !== 'PK');
  let UpdateExpression = '';
  const ExpressionAttributeNames: Record<string, string> = {};
  const ExpressionAttributeValues: Record<string, string | number> = {};
  cleanedKeys.forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const v = (items as any)[key];
    if (v) {
      UpdateExpression += `${!UpdateExpression ? '' : ','} #${key} = :${key}`;
      ExpressionAttributeNames[`#${key}`] = key;
      ExpressionAttributeValues[`:${key}`] = v;
    } else {
      warn(`no value for key:${key}`);
    }
  });
  return {
    UpdateExpression,
    ExpressionAttributeNames,
    ExpressionAttributeValues,
  };
};
