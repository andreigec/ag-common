import { getFetchLines } from './helpers/getFetchLines';
import { getFetchCall } from './helpers/call';
import { IOpenApiCodeBlock, IOpenApiOperationBlock } from '../types';
import React from 'react';
import styled from '@emotion/styled';

const Base = styled.div`
  white-space: pre;
`;

export const Fetch = <TDefaultApi,>({
  ops,
  p,
}: {
  p: IOpenApiCodeBlock<TDefaultApi>;
  ops: IOpenApiOperationBlock;
}) => {
  const { reqContent } = getFetchLines(ops, p);
  const x = getFetchCall(p, ops);

  return (
    <Base>
      {reqContent}
      <br />
      <br />
      {x}
    </Base>
  );
};
