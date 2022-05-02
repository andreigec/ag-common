export interface IOpenApiOperation {
  description: string;
  operationId: string;
  security?: { [name: string]: string };
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
export interface ICodeBlock<TDefaultApi> {
  /**
   * openapi schema. eg
   * const schema: any = require('common/openapi.generated').default;
   */
  schema: IOpenApi;
  apiKey?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  funcF: (f: TDefaultApi) => Promise<any>;
}
