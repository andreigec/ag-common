import styled from '@emotion/styled';
import React from 'react';

import { getLegendItems } from './getLegendItems';
import type { IBarChartData } from './types';

const Base = styled.div`
  background-color: var(--main-bg);
  border: solid 1px var(--main-bg-mid);
  padding: 0.5rem;
`;

const Title = styled.div`
  font-weight: bold;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
`;

const ItemTitle = styled.span`
  &[data-selected='true'] {
    font-weight: bold;
    text-decoration: underline;
  }
`;
const Total = styled.span`
  margin-left: auto;
  padding-left: 0.5rem;

  &[data-selected='true'] {
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const TooltipContent = ({
  data,
  selectedKey,
}: {
  data: IBarChartData;
  selectedKey?: string;
}) => {
  const { part, rest, restTotal } = getLegendItems({ data, selectedKey });

  return (
    <Base>
      <Title>{data.name}</Title>
      <Row>
        <span>total</span>
        <Total>{data.total}</Total>
      </Row>
      {part.map((v) => (
        <Row style={{ color: v.colour }} key={v.name}>
          <ItemTitle data-selected={selectedKey === v.name}>{v.name}</ItemTitle>
          <Total data-selected={selectedKey === v.name}>{v.value}</Total>
        </Row>
      ))}
      {rest.length > 0 && (
        <Row>
          <span>{rest.length} more</span>
          <Total>{restTotal}</Total>
        </Row>
      )}
    </Base>
  );
};
