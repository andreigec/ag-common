import { ICodeBlock } from './types';
import { getLines, Highlight } from './helpers/common';
import { FlexRow } from '../FlexRow';
import React from 'react';
import styled from 'styled-components';
const Base = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  flex-grow: 1;
  border: solid 1px #333;
  margin: 1rem;
  padding: 1rem;
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

const Curl = styled.div`
  white-space: pre;
`;

export const CodeBlock = <TDefaultApi,>(p: ICodeBlock<TDefaultApi>) => {
  const { path, verb, error, headerLines, fullApiUrl, bodyLine, operation } =
    getLines(p);

  if (error || !verb) {
    return <Base>{error}</Base>;
  }

  return (
    <Base>
      <FlexRow center>
        <Verb>{verb}</Verb>
        <ApiName>{operation.description ?? path}</ApiName>
      </FlexRow>
      <BlockTitle>Definition</BlockTitle>
      <Block>
        {verb.toUpperCase()} {path}
      </Block>
      <BlockTitle>Example Request</BlockTitle>
      <Block>
        <Curl>
          curl --request {verb.toUpperCase()}&nbsp;\
          <br />
          --url <Highlight>&apos;{fullApiUrl}&apos;</Highlight>&nbsp;\
          <br />
          <>{headerLines}</>
          <br />
          {bodyLine}
        </Curl>
      </Block>
    </Base>
  );
};
