import { getSecurityLine } from './security';
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Object.entries(ops as any).forEach(([verbN, op]) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((op as any).operationId === func) {
        path = pathN;
        verb = verbN;
      }
    }),
  );
  if (!path || !verb) {
    return { error: 'operation not found' };
  }

  const operation = p.schema.paths[path][verb];

  return { operation, verb, path };
};

const getBody = <TDefaultApi,>(
  p: ICodeBlock<TDefaultApi>,
): { content: JSX.Element; header: JSX.Element } => {
  const body = p.funcF.toString();
  const bstart = indexOfNumber(body, '(', 1);
  const bend = !bstart ? undefined : body.lastIndexOf(')');
  if (!bstart || !bend) {
    return { content: <></>, header: <></> };
  }

  const slice = body.substring(bstart + 1, bend);
  const json = slice.replace(/([a-zA-Z0-9-]+[^"]):/gim, '"$1":');
  const nice = JSON.stringify(JSON.parse(json), null, 2);
  const content = (
    <>
      -d @- &lt;&lt;&apos;EOF&apos;
      <br />
      <Highlight2>{nice}</Highlight2>
      <br />
      EOF
    </>
  );

  const header = (
    <>
      <span>--header </span>
      <Highlight>
        <Highlight>&apos;Content-Type: application/json&apos;</Highlight>
      </Highlight>
    </>
  );

  return {
    content,
    header,
  };
};

export const getLines = <TDefaultApi,>(p: ICodeBlock<TDefaultApi>) => {
  const ops = getOperation(p);
  if (ops.error) {
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
        {' '}
        \<br />
      </>,
    );
  }

  if (bodyLines.header) {
    headerLines.push(bodyLines.header);
    headerLines.push(<> \</>);
  }

  return {
    verb,
    path,
    error: undefined,
    headerLines,
    fullApiUrl,
    bodyLine: bodyLines?.content ?? undefined,
    operation,
  };
};
