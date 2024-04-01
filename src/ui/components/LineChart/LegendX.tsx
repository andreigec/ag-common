import styled from '@emotion/styled';
import React from 'react';

import { twelveHMs } from '../../../common';
import { smallScreen } from '../../styles';
import type { IVarStyles } from '../../styles/common';
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
`;

const Numbers = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  z-index: 1;

  @media ${smallScreen} {
    [data-group='1'],
    [data-group='2'] {
      display: none;
    }
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
  style,
}: {
  data: ILineChartItemRaw[];
  colours: Record<string, string>;
  lt: (a: number) => string;
  tt: (a: number) => string;
  style: IVarStyles;
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

  const itemsRaw: { v: number; group: number }[] = [{ v: minX, group: 0 }];
  const gc = 8;
  const gap = (maxX - minX) / gc;

  if (gap > twelveHMs) {
    for (let a = 1; a < gc; a += 1) {
      itemsRaw.push({ v: itemsRaw[a - 1].v + gap, group: (a % 3) + 1 });
    }
  }
  itemsRaw.push({ v: maxX, group: 0 });

  const items = itemsRaw.map((d) => ({ v: lt(d.v), group: d.group }));

  const ch = maxY.toString().length + 1;

  return (
    <Base
      style={{
        ...style,
        marginLeft: 'auto',
        width: `calc(100% - ${ch}ch)`,
      }}
    >
      <Bar>
        <Line style={{ backgroundColor: style.color }} />
        <Numbers>
          {items.map((i, i2) => (
            <span
              // eslint-disable-next-line react/no-array-index-key
              key={i.v + i2}
              data-group={i.group}
              style={{ backgroundColor: style.backgroundColor }}
            >
              {i.v}
            </span>
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
