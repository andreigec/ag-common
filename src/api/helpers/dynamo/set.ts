import { BatchWriteCommand, PutCommand } from '@aws-sdk/lib-dynamodb';

import { chunk } from '../../../common/helpers/array';
import { asyncForEach } from '../../../common/helpers/async';
import { withRetry } from '../withRetry';
import { dynamoDb } from '.';
import type { DynamoDBResult } from './types';

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
    let processed = 0;

    const chunked = chunk(items, batchSize);
    await asyncForEach(chunked, async (chunk) => {
      const params = new BatchWriteCommand({
        RequestItems: {
          [tableName]: chunk.map((Item) => ({ PutRequest: { Item } })),
        },
      });
      await withRetry(
        () => dynamoDb.send(params),
        `batchwrite ${processed}/${items.length}. size=${batchSize}`,
        {
          maxRetries: opt?.alwaysRetry ? null : undefined,
        },
      );
      processed += chunk.length;
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
