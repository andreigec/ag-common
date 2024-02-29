import styled from '@emotion/styled';
import React from 'react';

import { sumArray } from '../../../common/helpers/math';
import { getLegendItems } from './getLegendItems';
import type { ILineChartTooltip } from './types';

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
export const TooltipContent = (p: ILineChartTooltip) => {
  const data = {
    name: p.name,
    total: sumArray(p.values.map((a) => a.value)),
    values: p.values,
  };

  const li = getLegendItems({
    data,
  });

  return (
    <Base>
      <Title>{data.name}</Title>
      <Row>
        <span>total</span>
        <Total>{data.total}</Total>
      </Row>
      {li.part.map((v) => (
        <Row key={v.name + v.value} style={{ color: v.colour }}>
          <ItemTitle>{v.name}</ItemTitle>
          <Total>{v.value}</Total>
        </Row>
      ))}
      {li.rest.length > 0 && (
        <Row>
          <span>{li.rest.length} more</span>
          <Total>{li.restTotal}</Total>
        </Row>
      )}
    </Base>
  );
};
