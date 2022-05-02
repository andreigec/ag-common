import { getSecurityLine } from './security';
import { getBody } from './body';
import { ICodeBlock } from '../types';
import { indexOfNumber } from '../../../../common/helpers/string';
import styled from 'styled-components';
import React from 'react';
export const Highlight = styled.span`
  color: green;
`;

export const Highlight2 = styled.span`
  color: indianred;
`;
const getApiUrl = <TDefaultApi,>(p: ICodeBlock<TDefaultApi>) => {
  return p.schema.servers[0].url;
};

const getFunctionName = <TDefaultApi,>(p: ICodeBlock<TDefaultApi>) => {
  let ret = p.funcF.toString();
  const i1 = ret.indexOf('.') + 1;
  const i2 = indexOfNumber(ret, '(', 1);
  ret = ret.substring(i1, i2);
  return ret;
};

const getOperation = <TDefaultApi,>(p: ICodeBlock<TDefaultApi>) => {
  let path: string | undefined;
  let verb: string | undefined;
  const func = getFunctionName(p);
  Object.entries(p.schema.paths).forEach(([pathN, ops]) =>
    Object.entries(ops).forEach(([verbN, op]) => {
      if (op.operationId === func) {
        path = pathN;
        verb = verbN;
      }
    }),
  );
  if (!path || !verb) {
    return { error: 'operation not found', operation: undefined };
  }

  const operation = p.schema.paths[path][verb];

  return { operation, verb, path };
};

export const getLines = <TDefaultApi,>(p: ICodeBlock<TDefaultApi>) => {
  const ops = getOperation(p);
  if (ops.error || !ops.operation) {
    return { error: ops.error };
  }

  const { operation, path, verb } = ops;
  const apiUrl = getApiUrl(p);
  const fullApiUrl = apiUrl + path;
  const secline = getSecurityLine(p, { operation });
  if (secline.error) {
    return { error: secline.error };
  }

  const bodyLines = getBody(p) ?? undefined;
  const headerLines: JSX.Element[] = [];
  if (secline.content) {
    headerLines.push(secline.content);
    headerLines.push(
      <>
        &nbsp;\
        <br />
      </>,
    );
  }

  if (bodyLines.header) {
    headerLines.push(bodyLines.header);
    headerLines.push(<>&nbsp;\</>);
  }

  return {
    verb,
    path,
    error: undefined,
    headerLines,
    fullApiUrl,
    bodyLine: bodyLines?.content,
    operation,
  };
};
