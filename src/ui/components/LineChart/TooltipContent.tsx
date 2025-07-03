import styled from '@emotion/styled';
import React from 'react';

import type { IVarStyles } from '../../styles/common';
import type { ILegendItems } from './getLegendItems';
import type { ILineChartTooltip } from './types';

const Base = styled.div`
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
export const TooltipContent = (
  p: ILineChartTooltip & {
    legendItems: ILegendItems;
    style: IVarStyles;
  },
) => {
  const name = p.tt(p.selectedXs?.[0].x ?? 0);

  const roundNumber = (num: number): string => {
    // Round to 2 decimal places and remove trailing zeros
    const rounded = Math.round(num * 100) / 100;
    return rounded % 1 === 0
      ? rounded.toString()
      : rounded.toFixed(2).replace(/\.?0+$/, '');
  };

  return (
    <Base
      style={{
        ...p.style,
        border: `solid 1px ${p.style.borderColor}`,
      }}
    >
      <Title>{name}</Title>
      <Row>
        <span>total</span>
        <Total>{roundNumber(p.legendItems.total)}</Total>
      </Row>
      {p.legendItems.part.map((v) => (
        <Row key={v.name + v.y} style={{ color: v.colour }}>
          <ItemTitle>{v.name}</ItemTitle>
          <Total>{roundNumber(v.y)}</Total>
        </Row>
      ))}
      {p.legendItems.rest.length > 0 && (
        <Row>
          <span>{p.legendItems.rest.length} more</span>
          <Total>{roundNumber(p.legendItems.restTotal)}</Total>
        </Row>
      )}
    </Base>
  );
};
