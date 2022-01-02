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
    connectionId: string;
    domainName: string;
    identity: {
      userAgent: string;
      sourceIp: string;
    };
    httpMethod: string;
  };
}

interface AttributeValue {
  B?: string | undefined;
  BS?: string[] | undefined;
  BOOL?: boolean | undefined;
  L?: AttributeValue[] | undefined;
  M?: { [id: string]: AttributeValue } | undefined;
  N?: string | undefined;
  NS?: string[] | undefined;
  NULL?: boolean | undefined;
  S?: string | undefined;
  SS?: string[] | undefined;
}

export interface AppSyncResolverEvent<
  TArguments,
  TSource = Record<string, any> | null,
> {
  arguments: TArguments;
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
    variables: { [key: string]: any };
  };
  prev: { result: { [key: string]: any } } | null;
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
    userIdentity?: any;
  }[];
}
export type Key = { [key: string]: AttributeValue };
