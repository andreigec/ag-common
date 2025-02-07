import type { JSX } from 'react';
import React from 'react';

import { Highlight, Highlight2 } from '../../helpers/common';
import type { IOpenApiCodeBlock, IOpenApiOperationBlock } from '../../types';

export const getFetchCall = <TDefaultApi,>(
  p: IOpenApiCodeBlock<TDefaultApi>,
  ops: IOpenApiOperationBlock,
): JSX.Element | undefined => {
  return (
    <>
      <Highlight>const</Highlight>&nbsp;response = <Highlight>await</Highlight>{' '}
      <Highlight2>fetch</Highlight2>(
      <Highlight>&apos;{ops.fullApiUrl}&apos;</Highlight>,&nbsp;
      requestOptions);
    </>
  );
};
