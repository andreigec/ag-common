/* eslint-disable no-new */
import { aws_dynamodb as dynamodb, aws_iam as iam } from 'aws-cdk-lib';
import { Key } from './aws';

export interface DYNAMOKEYS {
  type: string;
  L1: string;
  L2?: string;
  L3?: string;
  L4?: string;
  L5?: string;
  PK: string;
  PK1: string;
  PK2: string;
  PK3?: string;
  PK4?: string;
}

export interface IGeneratedDynamoData {
  table: dynamodb.ITable;
  shortName: string;
}
export interface ILambdaPermission {
  dynamo?: {
    reads?: IGeneratedDynamoData[];
    writes?: IGeneratedDynamoData[];
  };
  policies?: iam.PolicyStatement[];
  env?: Record<string, string>;
}
export interface ILambdaPermissions {
  [pathHyphenVerb: string]: ILambdaPermission & {
    default?: ILambdaPermission;
  };
}

export interface IQueryDynamo {
  pkName: string;
  pkValue: string | number;
  pkOperator?: string;
  skName?: string;
  skValue?: string | number | string[] | number[];
  skOperator?: string;
  tableName: string;
  indexName?: string;
  count?: number;
  startKey?: Key;
  filterName?: string;
  filterValue?: string | number;
  filterOperator?: string;
}
export * from './aws';
