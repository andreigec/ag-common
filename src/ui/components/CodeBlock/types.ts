export interface ICodeBlock<TDefaultApi> {
  /**
   * openapi schema. eg
   * const schema: any = require('common/openapi.generated').default;
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: any;
  apiKey?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  funcF: (f: TDefaultApi) => Promise<any>;
}
