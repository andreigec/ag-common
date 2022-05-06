import { IOpenApiCodeBlock, IOpenApiOperationBlock } from '../../types';
import { Highlight2, Highlight } from '../../helpers/common';
import React from 'react';

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
