import { BatchWriteCommand } from '@aws-sdk/lib-dynamodb';

import { chunk } from '../../../common/helpers/array';
import { asyncForEach } from '../../../common/helpers/async';
import { withRetry } from '../withRetry';
import { dynamoDb } from '.';
import { scanWithGenerator } from './get';
import type { DynamoDBResult } from './types';

export const batchDelete = async (params: {
  tableName: string;
  keys: string[];
  pkName: string;
  opt?: {
    /** default 20 */
    batchSize?: number;
    /** option to control retry behavior: undefined = 3 retries, null = infinite. default 3 */
    maxRetries?: number | null;
  };
}): Promise<DynamoDBResult<void>> => {
  try {
    const { batchSize = 20, maxRetries } = params.opt ?? {};
    const chunked = chunk(params.keys, batchSize);
    let processed = 0;
    await asyncForEach(chunked, async (chunk) => {
      const batchDeleteParams = {
        RequestItems: {
          [params.tableName]: chunk.map((key) => ({
            DeleteRequest: { Key: { [params.pkName]: key } },
          })),
        },
      };
      await withRetry(
        () => dynamoDb.send(new BatchWriteCommand(batchDeleteParams)),
        `batchdelete ${processed}/${params.keys.length}. size=${batchSize}`,
        {
          maxRetries: maxRetries === undefined ? 3 : maxRetries,
        },
      );
      processed += chunk.length;
    });
    return { data: undefined };
  } catch (e) {
    return { error: (e as Error).toString() };
  }
};

export const wipeTable = async (
  tableName: string,
): Promise<DynamoDBResult<void>> => {
  try {
    const generator = scanWithGenerator<{ PK: string }>(tableName, {
      BATCH_SIZE: 100, // Process in chunks of 100 items
      maxRetries: null, // Always retry on 429 since we want to ensure complete deletion
    });

    // Process each batch of items
    for await (const batch of generator) {
      const pks = batch.map((item) => item.PK);
      if (pks.length > 0) {
        const result = await batchDelete({
          tableName,
          keys: pks,
          pkName: 'PK',
          opt: {
            maxRetries: null, // Always retry on 429 since we want to ensure complete deletion
          },
        });
        if ('error' in result) {
          return result;
        }
      }
    }

    return { data: undefined };
  } catch (e) {
    return { error: (e as Error).toString() };
  }
};
