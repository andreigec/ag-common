import styled from '@emotion/styled';
import React from 'react';

import { distinctBy, flat } from '../../../common/helpers/array';
import type { IBarChartData } from './types';

const Base = styled.div`
  display: flex;
  flex-flow: column;
`;

const Bar = styled.div`
  width: 100%;
  height: 1rem;
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
  height: 1rem;
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

export const Legend = ({
  data,
  maxWidth,
}: {
  data: IBarChartData[];
  maxWidth: number;
}) => {
  const items = [0];
  if (maxWidth > 10) {
    items.push(Math.floor(maxWidth * 0.25));
    items.push(Math.floor(maxWidth * 0.5));
    items.push(Math.floor(maxWidth * 0.75));
  }
  items.push(maxWidth);

  const keys = distinctBy(
    flat(
      data.map((d) =>
        d.values.map((v) => ({ colour: v.colour, name: v.name })),
      ),
    ),
    (s) => s.name,
  ).sort((a, b) => (a.name < b.name ? -1 : 1));

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
          {keys.map((k) => {
            return (
              <Item key={k.name}>
                <Col style={{ backgroundColor: k.colour }} />
                {k.name}
              </Item>
            );
          })}
        </Items>
      )}
    </Base>
  );
};
