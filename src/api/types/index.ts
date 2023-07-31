/* eslint-disable no-new */
import {
  aws_dynamodb as dynamodb,
  aws_iam as iam,
  aws_lambda as lambda,
} from 'aws-cdk-lib';

export interface DYNAMOKEYS {
  type: string;
  L1: string;
  L2?: string;
  L3?: string;
  L4?: string;
  L5?: string;
  PK: string;
  PK1: string;
  PK2?: string;
  PK3?: string;
  PK4?: string;
}

export interface ILambdaConfig {
  dynamo?: {
    reads?: dynamodb.ITable[];
    writes?: dynamodb.ITable[];
  };
  policies?: iam.PolicyStatement[];
  env?: Record<string, string>;
  layers?: lambda.ILayerVersion[];
  /**
   * use the name of the lambda authorizer passed in in the openApiImpl config
   */
  authorizerName?: string;
  /**
   * timeout in seconds. defaults to 30
   */
  timeoutS?: number;
  /**
   * lambda memory. defaults to 128
   */
  memory?: number;
  /**
   * reserved lambda concurrency. defaults to 5. if null, doesnt apply
   */
  reservedConcurrentExecutions?: number | null;
}

/**
 * 'default' will be applied to all functions
 */
export interface ILambdaConfigs {
  [pathHyphenVerb: string]: ILambdaConfig & {
    default?: ILambdaConfig;
  };
}

export type TSkOperator =
  | 'BETWEEN'
  | '<'
  | '<='
  | '='
  | '>='
  | '>'
  | '<>'
  | 'BEGINS_WITH';
export interface IQueryDynamo {
  pkName: string;
  pkValue: string | number;
  /** default, = */
  pkOperator?: string;
  skName?: string;
  skValue?: string | number | string[] | number[];
  /** default, = */
  skOperator?: TSkOperator;
  tableName: string;
  indexName?: string;
  /** default 1000 */
  count?: number;
  startKeyPk?: string;
  filterName?: string;
  filterValue?: string | number | boolean;
  /** default, = */
  filterOperator?: string;
  /** default = true */
  sortAscending?: boolean;
}
export * from './aws';
