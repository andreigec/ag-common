import styled from '@emotion/styled';
import React from 'react';

import { IOpenApiCodeBlock, IOpenApiOperationBlock } from '../types';
import { getFetchCall } from './helpers/call';
import { getFetchLines } from './helpers/getFetchLines';

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
