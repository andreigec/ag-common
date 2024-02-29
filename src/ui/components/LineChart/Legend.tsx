import styled from '@emotion/styled';
import React from 'react';

import { sumArray } from '../../../common/helpers/math';
import { getLegendItems } from './getLegendItems';
import type { ILineChartItemRaw } from './types';

const Base = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
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
`;
const Item = styled.div`
  display: flex;
  flex-flow: row;
  position: relative;
  align-items: center;
  flex-basis: 25%;
`;

const Col = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 0.25rem;
`;

export const Legend = (p: {
  data: ILineChartItemRaw[];
  className?: string;
  /** name -> colour */
  colours: Record<string, string>;
  tooltipTitle?: (a: number) => string;
  legendTitle?: (a: number) => string;
}) => {
  const total = sumArray(p.data.map((a) => a.y));

  const val: Record<string, { value: number; colour: string; name: string }> =
    {};

  p.data.forEach((d) => {
    if (!val[d.name]) {
      val[d.name] = { colour: p.colours[d.name], name: d.name, value: d.y };
    } else {
      val[d.name].value += d.y;
    }
  });
  const values = Object.values(val);

  const keys = getLegendItems({ data: { total, values } }).part.map((v) => ({
    colour: v.colour,
    name: v.name,
  }));

  const xs = p.data.map((a) => a.x);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);

  const itemsRaw = [minX];
  const gap = (maxX - minX) / 10;
  if (gap > 1) {
    for (let a = 1; a < 9; a += 1) {
      itemsRaw.push(itemsRaw[a - 1] + gap);
    }
  }
  itemsRaw.push(maxX);

  const items = itemsRaw.map((d) => p.legendTitle?.(d) ?? d);

  return (
    <Base>
      <Bar>
        <Line />
        <Numbers>
          {items.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </Numbers>
      </Bar>
      {keys.length > 1 && (
        <Items>
          {keys.map((k) => (
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
