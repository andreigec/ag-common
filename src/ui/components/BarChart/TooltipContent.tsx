import styled from '@emotion/styled';
import React from 'react';

import { take } from '../../../common/helpers/array';
import { sumArray } from '../../../common/helpers/math';
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

export const TooltipContent = (p: {
  data: IBarChartData & { key: string };
}) => {
  if (!p.data) {
    return null;
  }

  const total = p.data.total;

  // eslint-disable-next-line prefer-const
  let { part, rest } = take(p.data.values, 3);
  const ri = rest.findIndex((r) => r.name === p.data.key);
  if (p.data.key && ri !== -1) {
    part.push(rest[ri]);
    rest = rest.splice(ri, 1);
  }
  const restTotal = sumArray(rest.map((s) => s.value));

  return (
    <Base>
      <Title>{p.data.name}</Title>
      <Row>
        <span>total</span>
        <Total>{total}</Total>
      </Row>
      {part.map((v) => (
        <Row style={{ color: v.colour }} key={v.name}>
          <ItemTitle data-selected={p.data.key === v.name}>{v.name}</ItemTitle>
          <Total data-selected={p.data.key === v.name}>{v.value}</Total>
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
