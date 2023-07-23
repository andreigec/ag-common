/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable prefer-const */
import DynamoDB, {
  AttributeMap,
  BatchGetItemInput,
  Converter,
  DocumentClient,
  PutItemInput,
  QueryInput,
  ScanInput,
  ScanOutput,
} from 'aws-sdk/clients/dynamodb';
import { AWSError } from 'aws-sdk/lib/error';
import { PromiseResult } from 'aws-sdk/lib/request';

import { chunk, notEmpty, take } from '../../common/helpers/array';
import { asyncForEach } from '../../common/helpers/async';
import { debug, error as errorF, info, warn } from '../../common/helpers/log';
import { sleep } from '../../common/helpers/sleep';
import { DYNAMOKEYS, IQueryDynamo, Key } from '../types';
// eslint-disable-next-line import/no-mutable-exports
export let dynamoDb = new DocumentClient();
export const setDynamo = (region: string) => {
  dynamoDb = new DocumentClient({ region });
};

export const putDynamo = async <T>(
  item: T,
  tableName: string,
  opt?: {
    /** if provided, will assert this PK value doesnt already exist */
    pkName?: string;
  },
): Promise<{ error?: string; data?: T }> => {
  const params: PutItemInput = {
    TableName: tableName,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Item: item as any,
    ...(opt?.pkName && {
      ConditionExpression: `attribute_not_exists(${opt.pkName})`,
    }),
  };

  info(`running dynamo put=${JSON.stringify(params, null, 2)}`);

  // write the todo to the database
  const put = await dynamoDb.put(params).promise();

  if (put.$response.error && put.$response.error.statusCode) {
    return { error: put.$response.error.message };
  }
  // put never returns into, so just use what we have already
  return { data: item };
};

let batchWriteRaw = async (req: DocumentClient.BatchWriteItemRequestMap) => {
  let count = 0;
  let max = 5;
  // eslint-disable-next-line no-constant-condition
  while (true)
    try {
      const res = await dynamoDb
        .batchWrite({
          RequestItems: req,
        })
        .promise();

      if (res.$response.error) {
        throw new Error(res.$response.error.message);
      }

      return res;
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let es = (e as any).toString();
      let msg = es;
      warn('dynamo write error', msg);

      if (
        es.indexOf('429') !== -1 ||
        es.indexOf('ProvisionedThroughputExceeded') !== -1
      ) {
        count += 1;
        msg = `batch write throttled. retry ${count}/${max}`;
      } else {
        throw e;
      }

      if (count >= max) {
        throw e;
      }

      warn(`dynamo retry ${count}/${max}`);
      await sleep(2000);
    }
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const batchWrite = async <T extends {}>(
  tableName: string,
  itemsIn: T[],
  breakOnError = false,
): Promise<{ error?: string }> => {
  let items: T[] = JSON.parse(JSON.stringify(itemsIn));
  debug(`push to dynamo:${tableName} - count=${itemsIn.length}`);
  const error: AWSError[] = [];
  while (items.length > 0) {
    const { part, rest } = take(items, 25);
    // eslint-disable-next-line no-param-reassign
    items = rest;
    let req: DocumentClient.BatchWriteItemRequestMap = {
      [`${tableName}`]: part.map((item) => ({
        PutRequest: { Item: item },
      })),
    };

    let res = await batchWriteRaw(req);
    const newError = res.$response?.error ?? null;
    if (newError) {
      error.push(newError);
      if (breakOnError) {
        items = [];
      }
    }
  }

  if (error?.length > 0) {
    const me = error.join('\n');
    errorF(`batch write error=${me}`);

    return { error: me };
  }
  return {};
};

export const batchDelete = async ({
  tableName,
  breakOnError = true,
  pkName,
  keys,
  rangeName,
  rangeKeys,
}: {
  pkName: string;
  breakOnError?: boolean;
  tableName: string;
  keys: string[];
  rangeName?: string;
  rangeKeys?: string[];
}) => {
  info(`wipe keys dynamo:${tableName} - count=${keys.length}`);
  const error: AWSError[] = [];
  let breakV = false;
  await asyncForEach(keys, async (key, i) => {
    if (breakV) {
      return;
    }

    let params: DocumentClient.DeleteItemInput = {
      TableName: tableName,
      Key: { [pkName]: key },
    };

    if (rangeName) {
      let rangeValue = rangeKeys?.[i];
      if (rangeValue) {
        params.Key[rangeName] = rangeValue;
      }
    }

    const res = await dynamoDb.delete(params).promise();
    const newError = res.$response?.error ?? null;
    if (newError) {
      error.push(newError);
      if (breakOnError) {
        breakV = true;
      }
    }
  });

  if (error?.length > 0) {
    const me = error.join('\n');
    errorF(`batch write error=${me}`);

    return { error: me };
  }
  return {};
};

export const scan = async <T>(
  tableName: string,
  opt?: {
    filter?: {
      filterExpression: string;
      attrNames: Record<string, string>;
      attrValues: Record<string, string>;
    };
    /** ProjectionExpression. will csv values */
    requiredAttributeList?: string[];
  },
): Promise<T[]> => {
  const Items: T[] = [];
  let ExclusiveStartKey: Key | undefined;
  do {
    let params: DocumentClient.ScanInput = {
      TableName: tableName,
      ExclusiveStartKey,
    };

    if (opt?.filter) {
      params.FilterExpression = opt.filter.filterExpression;
      params.ExpressionAttributeNames = opt.filter.attrNames;
      params.ExpressionAttributeValues = opt.filter.attrValues;
    }

    if (opt?.requiredAttributeList) {
      params.ProjectionExpression = opt.requiredAttributeList.join(', ');
    }

    const {
      Items: newitems,
      LastEvaluatedKey,
      $response,
      // eslint-disable-next-line no-await-in-loop
    } = await dynamoDb.scan(params).promise();

    ExclusiveStartKey = LastEvaluatedKey;

    if ($response.error && $response.error.statusCode) {
      throw new Error($response.error.message);
    }

    if (newitems) {
      Items.push(...newitems.map((r) => r as T));
    }
  } while (ExclusiveStartKey);

  info(`dynamo scan against ${tableName} ok, count=${Items?.length}`);

  return Items;
};

export const getItemDynamo = async <T>({
  tableName,
  pkName,
  pkValue,
}: {
  pkName: string;
  pkValue: string;
  tableName: string;
}): Promise<T> => {
  const params: DocumentClient.GetItemInput = {
    Key: { [pkName]: pkValue },
    TableName: tableName,
  };

  try {
    const res = await dynamoDb.get(params).promise();
    const ret = res.Item as T;
    debug(`got dynamo getitem=${JSON.stringify(params, null, 2)}`);

    return ret;
  } catch (e) {
    errorF(e);
    throw e;
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
}): Promise<T[]> => {
  const params: BatchGetItemInput = {
    RequestItems: {
      [tableName]: {
        Keys: items.map(({ pkName, pkValue }) => ({
          [pkName]: { S: pkValue },
        })),
      },
    },
  };

  const dbRaw = new DynamoDB({ apiVersion: '2012-10-08' });

  try {
    const res = await dbRaw.batchGetItem(params).promise();
    debug(`got dynamo getitems=${JSON.stringify(res, null, 2)}`);
    let ret =
      res.Responses?.[tableName]?.map((s) => Converter.unmarshall(s) as T) ||
      [];

    return ret;
  } catch (e) {
    let msg =
      `error with getitems query:` +
      JSON.stringify(params, null, 2) +
      '\n' +
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (e as any).toString();

    errorF(msg);
    throw e;
  }
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
  startKey: startKeyIn,
  filterName,
  filterValue,
  filterOperator = '=',
  sortAscending = true,
}: IQueryDynamo): Promise<{ Items: T[]; startKey?: Key }> => {
  let startKey = startKeyIn;
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
    const params: QueryInput = {
      TableName: tableName,
      KeyConditionExpression: kce,
      ExpressionAttributeNames: ean,
      ExpressionAttributeValues: eav,
      ExclusiveStartKey: startKey,
      FilterExpression,
      ScanIndexForward: sortAscending,
    };

    if (count > 0) {
      params.Limit = count;
    } else {
      params.Limit = 1000;
    }

    if (indexName) {
      params.IndexName = indexName;
    }

    let newitems: DocumentClient.ItemList | undefined;
    let lek: Key | undefined;
    let $response: { error?: AWSError | void };
    try {
      ({
        Items: newitems,
        LastEvaluatedKey: lek,
        $response,
        // eslint-disable-next-line no-await-in-loop
      } = await dynamoDb.query(params).promise());
    } catch (e) {
      errorF('error. query params=', JSON.stringify(params), e);
      throw e;
    }

    startKey = lek;

    if ($response.error) {
      errorF('error. query params=', JSON.stringify(params));
      throw new Error($response.error.message);
    }

    debug(
      `dynamo query against ${params?.TableName} ok, count=${newitems?.length} ${JSON.stringify(
        params,
      )}`,
      ` next startkey=${startKey}`,
    );

    if (newitems) {
      Items.push(...newitems.map((r) => r as T));
    }

    if (count > 0 && (newitems?.length ?? 0) >= count) {
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
  const dbRaw = new DynamoDB({ apiVersion: '2012-10-08' });
  let infoV = await dbRaw
    .describeTable({
      TableName: tableName,
    })
    .promise();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  let keyHash = infoV.Table.KeySchema.find(
    (k) => k.KeyType === 'HASH',
  ).AttributeName;

  const params: ScanInput = {
    TableName: tableName,
    ExclusiveStartKey: undefined,
  };

  let all: AttributeMap[] = [];
  let working: PromiseResult<ScanOutput, AWSError>;
  do {
    working = await dbRaw.scan(params).promise();
    working.Items?.forEach((item) => all.push(item));
    params.ExclusiveStartKey = working.LastEvaluatedKey;
  } while (typeof working.LastEvaluatedKey !== 'undefined');

  warn(`will delete ${all?.length} items from ${tableName}`);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const datagr = chunk(all, 25);
  let res = await Promise.all(
    datagr.map((group) =>
      dbRaw
        .batchWriteItem({
          RequestItems: {
            [`${tableName}`]: group.map((s) => ({
              DeleteRequest: {
                Key: {
                  [`${keyHash}`]: s[keyHash],
                },
              },
            })),
          },
        })
        .promise(),
    ),
  );

  let errors = res
    .map((r) => (r?.$response?.error || {})?.message || undefined)
    .filter(notEmpty);

  if (errors.length > 0) {
    errorF('errors=', JSON.stringify(errors));
    return { errors };
  }

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
