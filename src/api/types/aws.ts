import type { AttributeValue } from '@aws-sdk/client-dynamodb/dist-types/models/models_0';

export interface APIGatewayProxyResult {
  statusCode: number;
  headers?:
    | {
        [header: string]: boolean | number | string;
      }
    | undefined;
  multiValueHeaders?:
    | {
        [header: string]: (boolean | number | string)[];
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
    authorizer?: {
      data?: string;
    };
    connectionId: string;
    domainName: string;
    identity: {
      userAgent: string;
      sourceIp: string;
    };
    httpMethod: string;
  };
}

export interface AppSyncResolverEvent<
  TArguments,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TSource = Record<string, any> | null,
> {
  arguments: TArguments;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  identity?: any;
  source: TSource;
  request: {
    headers: { [name: string]: string | undefined };
  };
  info: {
    selectionSetList: string[];
    selectionSetGraphQL: string;
    parentTypeName: string;
    fieldName: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    variables: { [key: string]: any };
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prev: { result: { [key: string]: any } } | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stash: { [key: string]: any };
}
export interface DynamoDBStreamEvent {
  Records: {
    awsRegion?: string | undefined;
    dynamodb?:
      | {
          ApproximateCreationDateTime?: number | undefined;
          Keys?: { [key: string]: AttributeValue } | undefined;
          NewImage?: { [key: string]: AttributeValue } | undefined;
          OldImage?: { [key: string]: AttributeValue } | undefined;
          SequenceNumber?: string | undefined;
          SizeBytes?: number | undefined;
          StreamViewType?:
            | 'KEYS_ONLY'
            | 'NEW_IMAGE'
            | 'OLD_IMAGE'
            | 'NEW_AND_OLD_IMAGES'
            | undefined;
        }
      | undefined;
    eventID?: string | undefined;
    eventName?: 'INSERT' | 'MODIFY' | 'REMOVE' | undefined;
    eventSource?: string | undefined;
    eventSourceARN?: string | undefined;
    eventVersion?: string | undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    userIdentity?: any;
  }[];
}
export type Key = { [key: string]: AttributeValue };
