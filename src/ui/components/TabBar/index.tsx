'use client';
import styled from '@emotion/styled';
import type { CSSProperties } from 'react';
import React, { useState } from 'react';

import { Icon } from '../Icon';

const Base = styled.div`
  display: flex;
  flex-flow: row;
  &[data-mode='vert'] {
    flex-flow: column;
  }
  overflow: hidden;
  justify-content: space-around;
  width: 100%;
  margin: auto;
`;

const Item = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  border-radius: 2rem;
  justify-content: center;
  height: calc(100% - 1rem);
  padding-left: 1rem;
  padding-right: 1rem;
  width: 10rem;
  &[data-selected='false'] {
    opacity: 0.8;
    cursor: pointer;
  }
`;
const IconStyled = styled(Icon)`
  height: 1.5rem;
  max-height: 80%;
  max-width: fit-content;
`;
const Text = styled.div`
  max-height: 50%;
  overflow: hidden;
`;

export interface ITabBar {
  onChangeIndex: (i: number) => void;

  className?: string;
  cookieDocument: string;
  style?: CSSProperties;
  items: {
    text: string;
    icon: (p: { style: { fill?: string } }) => JSX.Element;
  }[];
  theme?: {
    /** default black */
    front?: string;
    /** default blue */
    frontSelected?: string;
    /** default #eee */
    back?: string;
  };
  /** default 0 */
  defaultSelectedIndex?: number;
}
export const TabBar = (p: ITabBar) => {
  const {
    defaultSelectedIndex = 0,
    theme: { back = '#eee', frontSelected = '#4d76ff', front = 'black' },
  } = { ...p, theme: p.theme ?? {} };

  const [index, setIndex] = useState<number>(defaultSelectedIndex);

  return (
    <Base className={p.className} style={p.style}>
      {p.items.map((v, i) => {
        const selected = index === i;
        return (
          <Item
            style={{
              backgroundColor: back,
              color: front,
              ...(selected && { color: frontSelected }),
              maxWidth: `${100 / p.items.length}%`,
            }}
            data-selected={selected}
            // eslint-disable-next-line react/no-array-index-key
            key={i.toString()}
            onClick={() => {
              if (index === i) {
                return;
              }
              setIndex(i);
              p.onChangeIndex(i);
            }}
          >
            <IconStyled style={{ width: '50%' }}>
              {v.icon({
                style: { ...(selected && { fill: frontSelected }) },
              })}
            </IconStyled>
            <Text data-type="text">{v.text}</Text>
          </Item>
        );
      })}
    </Base>
  );
};
