'use client';
import styled from '@emotion/styled';

import type {
  IOpenApi,
  IOpenApiCodeBlock,
  IOpenApiOperation,
  IOpenApiOperationBlock,
} from '../types';

export const Highlight = styled.span`
  color: green;
`;

export const Highlight2 = styled.span`
  color: indianred;
`;

const indexOfNumber = (str: string, char: string, num = 0) => {
  let ret = -1;
  for (let c = 0; c <= num; c += 1) {
    ret = str.indexOf(char, ret + 1);
  }

  if (ret === -1) {
    return undefined;
  }
  return ret;
};

const getApiUrl = <TDefaultApi>(p: IOpenApiCodeBlock<TDefaultApi>) => {
  return p.schema.servers[0].url;
};

const getFunctionName = <TDefaultApi>(p: IOpenApiCodeBlock<TDefaultApi>) => {
  let ret = p.funcF.toString();
  const i1 = ret.indexOf('.') + 1;
  const i2 = ret.indexOf('(', i1);
  ret = ret.substring(i1, i2);
  return ret;
};

export const getOperation = <TDefaultApi>(
  p: IOpenApiCodeBlock<TDefaultApi>,
): IOpenApiOperationBlock => {
  let path: string | undefined;
  let verb: string | undefined;
  const func = getFunctionName(p);
  Object.entries(p.schema.paths).forEach(([pathN, ops]) =>
    Object.entries(ops).forEach(([verbN, op]) => {
      //openapi codegen gives raw fn, match that as well
      if (op.operationId === func || op.operationId + 'Raw' === func) {
        path = pathN;
        verb = verbN;
      }
    }),
  );

  if (!path || !verb) {
    return {
      error: 'operation not found',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;
  }

  const operation = p.schema.paths[path][verb];

  return { operation, verb, path, fullApiUrl: getApiUrl(p) };
};

export const getBodyJson = <TDefaultApi>(
  p: IOpenApiCodeBlock<TDefaultApi>,
): { nice: string; raw: string } | undefined => {
  const body = p.funcF.toString();
  const bstart = indexOfNumber(body, '(', 1);
  const bend = !bstart ? undefined : body.lastIndexOf(')');
  if (!bstart || !bend) {
    return undefined;
  }

  //no body required
  if (bend - bstart === 1) {
    return undefined;
  }

  const raw = body.substring(bstart + 1, bend);
  const cleaned = raw
    .replace(/([a-zA-Z0-9-]+[^"]):/gim, '"$1":')
    .replace(/'/gim, '"');

  const nice = JSON.stringify(JSON.parse(cleaned), null, 2);

  return { nice, raw };
};

export const getSecurity = (
  p: { apiKey?: string; schema: IOpenApi },
  { operation }: { operation: IOpenApiOperation },
) => {
  const security1 = operation.security?.[0];
  const security2 = !security1 ? undefined : Object.keys(security1)[0];
  const security = !security2
    ? undefined
    : p.schema.components.securitySchemes[security2];

  if (security) {
    if (security.in !== 'header') {
      return null;
    }
    return security;
  }
  return undefined;
};
