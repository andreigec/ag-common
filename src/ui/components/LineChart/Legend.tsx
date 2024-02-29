import styled from '@emotion/styled';
import React from 'react';

import { legendItemsKeys } from './getLegendItems';
import type { ILineChart } from './types';

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

export const Legend = (p: ILineChart) => {
  const legendItems = legendItemsKeys(p);
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
