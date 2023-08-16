import styled from '@emotion/styled';
import React from 'react';

import { notEmpty } from '../../../../common/helpers/array';
import { Highlight } from '../helpers/common';
import { joinJsxWithSlash } from '../helpers/joinJsx';
import type { IOpenApiCodeBlock, IOpenApiOperationBlock } from '../types';
import { getCurlLines } from './helpers/getCurlLines';

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
    ...(headerLines ?? []),
    bodyLine,
  ].filter(notEmpty);

  return <Base>{joinJsxWithSlash(rows)}</Base>;
};
