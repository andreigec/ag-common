import styled from '@emotion/styled';
import React from 'react';

import type { ILineChartItemRaw } from './types';

const Base = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
`;

const Numbers = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column-reverse;
  justify-content: space-between;
  z-index: 1;
  > span {
    color: var(--main-fg);
    background-color: var(--main-bg);
    text-align: right;
  }
`;

export const LegendY = ({ data }: { data: ILineChartItemRaw[] }) => {
  const ys = data.map((a) => a.y);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const items = [minY];
  const gc = 3;
  const gap = (maxY - minY) / gc;

  for (let a = 1; a < gc; a += 1) {
    items.push(Math.floor(items[a - 1] + gap));
  }
  items.push(maxY);

  const ch = maxY.toString().length;

  return (
    <Base style={{ maxWidth: `${ch}ch`, paddingRight: '1ch' }}>
      <Numbers>
        {items.map((i, i2) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={i + i2}>{i}</span>
        ))}
      </Numbers>
    </Base>
  );
};
