import { getCurlLines } from './helpers/getCurlLines';
import { IOpenApiCodeBlock, IOpenApiOperationBlock } from '../types';
import { Highlight } from '../helpers/common';
import { notEmpty } from '../../../../common';
import { joinJsxWithSlash } from '../helpers/joinJsx';
import React from 'react';
import styled from '@emotion/styled';

const Base = styled.div`
  white-space: pre;
`;

export const Curl = <TDefaultApi,>({
  ops,
  p,
}: {
  p: IOpenApiCodeBlock<TDefaultApi>;
  ops: IOpenApiOperationBlock;
}) => {
  const { fullApiUrl, headerLines, bodyLine } = getCurlLines(ops, p);
  const { verb } = ops;
  const rows: JSX.Element[] = [
    <>curl --request {verb.toUpperCase()}</>,
    <>
      --url <Highlight>&apos;{fullApiUrl}&apos;</Highlight>
    </>,
    ...(headerLines || []),
    bodyLine,
  ].filter(notEmpty);

  return <Base>{joinJsxWithSlash(rows)}</Base>;
};
