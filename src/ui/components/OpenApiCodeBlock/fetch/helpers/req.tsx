'use client';
import styled from '@emotion/styled';
import type { JSX } from 'react';
import React from 'react';

import {
  getBodyJson,
  getSecurity,
  Highlight,
  Highlight2,
} from '../../helpers/common';
import { joinJsxWithComma } from '../../helpers/joinJsx';
import type { IOpenApiCodeBlock, IOpenApiOperationBlock } from '../../types';

const rb = <>&#125;</>;
const lb = <>&#123;</>;
const Lpad = styled.div`
  padding-left: 0.5rem;
`;

export const getRequestOptions = <TDefaultApi,>(
  p: IOpenApiCodeBlock<TDefaultApi>,
  ops: IOpenApiOperationBlock,
): JSX.Element | undefined => {
  const { nice } = getBodyJson(p) ?? {};
  if (!nice) {
    return undefined;
  }

  const sec = getSecurity(p, ops);
  const h1 = (
    <>
      {' '}
      <Highlight>&apos;Content-Type&apos;</Highlight>:{' '}
      <Highlight>&apos;application/json&apos;</Highlight>
    </>
  );

  let h2: JSX.Element | undefined;
  if (sec) {
    h2 = (
      <>
        {' '}
        <Highlight>&apos;{sec.name}&apos;</Highlight>:{' '}
        <Highlight>&apos;{p.apiKey || '(API KEY)'}&apos;</Highlight>
      </>
    );
  }

  const header = !sec ? (
    <></>
  ) : (
    <>
      headers: {lb}
      <Lpad>{joinJsxWithComma([h1, h2])}</Lpad>
      {rb},
    </>
  );

  const body = (
    <>
      body: <Highlight2>JSON</Highlight2>.<Highlight>stringify</Highlight>(
      {nice})
    </>
  );

  const content = (
    <>
      const requestOptions = {lb}
      <Lpad>
        method: <Highlight>&apos;{ops.verb.toUpperCase()}&apos;</Highlight>,
        <br />
        {header}
        <br />
        {body}
        <br />
      </Lpad>
      {rb};
    </>
  );

  return content;
};
