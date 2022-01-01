/* eslint-disable no-new */
import { aws_dynamodb as dynamodb } from 'aws-cdk-lib';
import { Key } from 'aws-sdk/clients/dynamodb';

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
export interface ILambdaPermissions {
  [pathHyphenVerb: string]: {
    reads?: IGeneratedDynamoData[];
    writes?: IGeneratedDynamoData[];
  } & {
    default?: {
      reads?: IGeneratedDynamoData[];
      writes?: IGeneratedDynamoData[];
    };
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
export interface APIGatewayProxyResult {
  statusCode: number;
  headers?:
    | {
        [header: string]: boolean | number | string;
      }
    | undefined;
  multiValueHeaders?:
    | {
        [header: string]: Array<boolean | number | string>;
      }
    | undefined;
  body: string;
  isBase64Encoded?: boolean | undefined;
}

export interface APIGatewayEvent {
  body: string | null;
  headers: Record<string, string | undefined>;
  httpMethod: string;
  queryStringParameters: Record<string, string> | null;
  pathParameters: Record<string, string> | null;
  resource: string;
  path: string;
  requestContext: {
    identity: {
      userAgent: string;
      sourceIp: string;
    };
    httpMethod: string;
  };
}
