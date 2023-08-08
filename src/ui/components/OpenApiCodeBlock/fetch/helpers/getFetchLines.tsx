import type {
  IFetchLines,
  IOpenApiCodeBlock,
  IOpenApiOperationBlock,
} from '../../types';
import { getRequestOptions } from './req';

export const getFetchLines = <TDefaultApi,>(
  ops: IOpenApiOperationBlock,
  p: IOpenApiCodeBlock<TDefaultApi>,
): IFetchLines => {
  const { operation, path, verb, fullApiUrl } = ops;
  const withPath = fullApiUrl + path;
  const reqContent = getRequestOptions(p, ops) ?? undefined;

  return {
    verb,
    path,
    error: undefined,
    fullApiUrl: withPath,
    reqContent,
    operation,
  };
};
