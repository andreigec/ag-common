import { IOpenApiCodeBlock, IOpenApiOperationBlock } from '../../types';
import {
  Highlight2,
  Highlight,
  getBodyJson,
  getSecurity,
} from '../../helpers/common';
import { joinJsxWithComma } from '../../helpers/joinJsx';
import { toTitleCase } from '../../../../../common';
import React from 'react';
import styled from 'styled-components';
const rb = <>&#125;</>;
const lb = <>&#123;</>;
const Lpad = styled.div`
  padding-left: 0.5rem;
`;

export const getFetchCall = <TDefaultApi,>(
  p: IOpenApiCodeBlock<TDefaultApi>,
  ops: IOpenApiOperationBlock,
): JSX.Element | undefined => {
  return (
    <>
      <Highlight>const</Highlight>&nbsp;response = <Highlight>await</Highlight>{' '}
      <Highlight2>fetch</Highlight2>
    </>
  );
};
