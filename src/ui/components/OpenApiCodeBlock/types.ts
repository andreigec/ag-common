import type { JSX } from 'react';

export interface IOpenApiOperation {
  description?: string;
  operationId: string;
  security?: { [name: string]: string }[];
}
export interface IOpenApiSecurityScheme {
  in: string;
  name: string;
}
export interface IOpenApi {
  paths: { [pathname: string]: { [verb: string]: IOpenApiOperation } };
  servers: { url: string }[];
  components: { securitySchemes: { [name: string]: IOpenApiSecurityScheme } };
}
export interface IOpenApiCodeBlock<TDefaultApi> {
  /**
   * openapi schema. eg
   * const schema: any = require('common/openapi.generated').default;
   */
  schema: IOpenApi;
  apiKey?: string;

  funcF: (f: TDefaultApi) => Promise<any>;
}

export interface ICurlLines {
  error?: string;
  verb?: string;
  path?: string;
  headerLines?: JSX.Element[];
  fullApiUrl?: string;
  bodyLine?: JSX.Element;
  operation?: IOpenApiOperation;
}

export interface IFetchLines {
  error?: string;
  verb?: string;
  path?: string;
  fullApiUrl?: string;
  reqContent?: JSX.Element;
  operation?: IOpenApiOperation;
}

export interface IOpenApiOperationBlock {
  error?: string;
  operation: IOpenApiOperation;
  verb: string;
  path: string;
  fullApiUrl: string;
}
