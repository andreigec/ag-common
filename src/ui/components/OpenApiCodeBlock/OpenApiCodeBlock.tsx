'use client';
import styled from '@emotion/styled';
import React from 'react';

import { FlexRow } from '../FlexRow';
import { Curl } from './curl';
import { Fetch } from './fetch';
import { getOperation } from './helpers/common';
import type { IOpenApiCodeBlock } from './types';

const Base = styled.div`
  display: flex;
  flex-flow: column;
  width: calc(100% - 2rem);
  flex-grow: 1;
  border: solid 1px #333;
  padding: 1rem;
  overflow-y: auto;
  max-height: calc(100% - 2rem);
`;

const Verb = styled.div`
  background-color: #333;
  color: white;
  margin-right: 0.5rem;
  padding: 0.25rem;
  font-size: 0.8rem;
`;

const ApiName = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

const BlockTitle = styled.div`
  color: #333;
  font-size: 1.2rem;
  margin-top: 2rem;
`;

const Block = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-top: 0.5rem;
`;

export const OpenApiCodeBlock = <TDefaultApi,>(
  p: IOpenApiCodeBlock<TDefaultApi>,
) => {
  const ops = getOperation(p);

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (ops.error || !ops.verb || !ops.operation) {
    return <Base>{ops.error}</Base>;
  }

  const { verb, operation, path } = ops;

  return (
    <Base>
      <FlexRow center noGrow>
        <Verb>{verb}</Verb>
        <ApiName>{operation.description ?? path}</ApiName>
      </FlexRow>
      <BlockTitle>Definition</BlockTitle>
      <Block>
        {verb.toUpperCase()} {path}
      </Block>
      <BlockTitle>Example curl Request</BlockTitle>
      <Block>
        <Curl ops={ops} p={p} />
      </Block>
      <BlockTitle>Example fetch Request</BlockTitle>
      <Block>
        <Fetch ops={ops} p={p} />
      </Block>
    </Base>
  );
};
