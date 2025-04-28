import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import type { AwsCredentialIdentity } from '@smithy/types';

import * as deleteOps from './delete';
import * as getOps from './get';
import * as setOps from './set';

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

// Initialize with default region
dynamoDb = setDynamo('ap-southeast-2');

// Export all operations
export const {
  getItemDynamo,
  getItemsDynamo,
  queryDynamo,
  queryWithGenerator,
  scan,
  scanWithGenerator,
} = getOps;

export const { putDynamo, batchWrite, getDynamoUpdates } = setOps;

export const { batchDelete, wipeTable } = deleteOps;

// Export types
export * from './types';
