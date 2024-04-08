import type {
  ICurlLines,
  IOpenApiCodeBlock,
  IOpenApiOperationBlock,
} from '../../types';
import { getBody } from './body';
import { getSecurityLine } from './security';

export const getCurlLines = <TDefaultApi,>(
  ops: IOpenApiOperationBlock,
  p: IOpenApiCodeBlock<TDefaultApi>,
): ICurlLines => {
  const { operation, path, verb, fullApiUrl } = ops;
  const withPath = fullApiUrl + path;
  const secline = getSecurityLine(p, { operation });
  if (secline.error) {
    return { error: secline.error };
  }

  const bodyLines = getBody(p);
  const headerLines: JSX.Element[] = [];
  if (secline.content) {
    headerLines.push(secline.content);
  }

  if (bodyLines.header) {
    headerLines.push(bodyLines.header);
  }

  return {
    verb,
    path,
    error: undefined,
    headerLines,
    fullApiUrl: withPath,
    bodyLine: bodyLines.content,
    operation,
  };
};
