import styled from '@emotion/styled';
import React from 'react';

import { twelveHMs } from '../../../common';
import { take } from '../../../common/helpers/array';
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
const legendItemsKeys = ({
  data,
  colours,
}: {
  data: ILineChartItemRaw[];
  colours: Record<string, string>;
}) => {
  const val: Record<string, { value: number; colour: string; name: string }> =
    {};

  data.forEach((d) => {
    if (!val[d.name]) {
      val[d.name] = { colour: colours[d.name], name: d.name, value: d.y };
    } else {
      val[d.name].value += d.y;
    }
  });
  const values = Object.values(val);

  const legendItems = take(values, 3).part.map((v) => ({
    colour: v.colour,
    name: v.name,
  }));
  return legendItems;
};

export const Legend = ({
  data,
  lt,
  colours,
}: {
  data: ILineChartItemRaw[];
  colours: Record<string, string>;
  lt: (a: number) => string;
}) => {
  const legendItems = legendItemsKeys({ data, colours });
  const xs = data.map((a) => a.x);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);

  const itemsRaw = [minX];
  const gap = (maxX - minX) / 10;

  if (gap > twelveHMs) {
    for (let a = 1; a < 9; a += 1) {
      itemsRaw.push(itemsRaw[a - 1] + gap);
    }
  }
  itemsRaw.push(maxX);

  const items = itemsRaw.map((d) => lt(d) ?? d);

  return (
    <Base>
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
