import styled from '@emotion/styled';
import React from 'react';

import { twelveHMs } from '../../../common';
import { getLegendItems } from './getLegendItems';
import type { ILineChartItemRaw } from './types';

const Base = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  color: var(--main-fg);
`;

const Bar = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  position: relative;
  margin-bottom: 0.25rem;
`;
const Line = styled.div`
  position: absolute;
  top: calc(50% - 1px);
  height: 2px;
  left: 0;
  right: 0;
  background-color: var(--main-fg);
`;

const Numbers = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  z-index: 1;

  > span {
    background-color: var(--main-bg);
  }
`;

const Items = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  position: relative;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const Item = styled.div`
  display: flex;
  flex-flow: row;
  position: relative;
  align-items: center;
  &:not(:first-of-type) {
    padding-left: 0.5rem;
  }
  &:not(:last-of-type) {
    padding-right: 0.5rem;
  }
`;

const Col = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 0.25rem;
`;

export const LegendX = ({
  data,
  lt,
  tt,
  colours,
}: {
  data: ILineChartItemRaw[];
  colours: Record<string, string>;
  lt: (a: number) => string;
  tt: (a: number) => string;
}) => {
  const legendItems = getLegendItems({
    data,
    colours,
    fixed: true,
    lt,
    tt,
  }).part;
  const xs = data.map((a) => a.x);
  const ys = data.map((a) => a.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const maxY = Math.max(...ys);

  const itemsRaw = [minX];
  const gc = 8;
  const gap = (maxX - minX) / gc;

  if (gap > twelveHMs) {
    for (let a = 1; a < gc; a += 1) {
      itemsRaw.push(itemsRaw[a - 1] + gap);
    }
  }
  itemsRaw.push(maxX);

  const items = itemsRaw.map((d) => lt(d) ?? d);

  const ch = maxY.toString().length + 1;

  return (
    <Base style={{ marginLeft: 'auto', width: `calc(100% - ${ch}ch)` }}>
      <Bar>
        <Line />
        <Numbers>
          {items.map((i, i2) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={i + i2}>{i}</span>
          ))}
        </Numbers>
      </Bar>
      {legendItems.length > 1 && (
        <Items>
          {legendItems.map((k) => (
            <Item key={k.name}>
              <Col style={{ backgroundColor: k.colour }} />
              {k.name}
            </Item>
          ))}
        </Items>
      )}
    </Base>
  );
};
