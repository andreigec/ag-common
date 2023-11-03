'use client';
import styled from '@emotion/styled';
import React, { useState } from 'react';

import { Computer, Moon, Sun } from '../../icons';
import { FlexColumn } from '../FlexColumn';
import { Icon } from '../Icon';
import { RadioGroup } from './Base';

export enum TDarkMode {
  'dark',
  'light',
  'system',
}

const IconStyled = styled(Icon)`
  > svg {
    height: 60%;
  }
`;

const Label = styled(FlexColumn)`
  border-radius: 50%;
  overflow: hidden;
  &[data-selected='true'] {
    background-color: white;
  }
`;

const getColours = (p: TDarkMode, vert: boolean) => {
  const deg = vert ? '180deg' : '90deg';
  switch (p) {
    case TDarkMode.dark: {
      const d1 = 'rgba(173,128,227,1)';
      const d2 = 'rgba(106,44,181,1)';
      return [d1, `linear-gradient(${deg}, ${d1} 0%, ${d2} 76%)`];
    }
    case TDarkMode.light: {
      const l1 = 'rgba(255,169,54,1)';
      const l2 = 'rgba(255,189,100,1)';
      return [l1, `linear-gradient(${deg}, ${l1} 0%, ${l2} 76%)`];
    }
    case TDarkMode.system: {
      return ['green', 'green'];
    }
  }
};

const v: {
  mode: TDarkMode;
  icon: (p: { style: { fill: string } }) => JSX.Element;
}[] = [
  { mode: TDarkMode.dark, icon: Moon },
  { mode: TDarkMode.system, icon: Computer },
  { mode: TDarkMode.light, icon: Sun },
];

export interface IDarkMode {
  /** default system */
  default?: TDarkMode;
  onSubmit: (p: TDarkMode) => void;
  /** default horiz */
  mode?: 'vert' | 'horiz';
  /** default 2.5rem */
  iconSize?: string;
  className?: string;
}
export const DarkMode = (p: IDarkMode) => {
  const { iconSize = '2.5rem' } = p;
  let defaultIndex = v.findIndex((v2) => v2.mode === p.default);
  if (defaultIndex === -1) {
    defaultIndex = 1;
  }

  const [index, setIndex] = useState<number>(defaultIndex);
  const [fill, background] = getColours(v[index].mode, p.mode === 'vert');
  const twCalc = `calc(${iconSize} + ${iconSize} + ${iconSize} + 20px)`;
  return (
    <RadioGroup
      className={p.className}
      mode={p.mode}
      values={v}
      defaultIndex={index}
      onSubmit={(v, i) => {
        setIndex(i);
        p.onSubmit(v.mode);
      }}
      style={{
        background,
        border: `solid 2px ${fill}`,
        width: twCalc,
        height: iconSize,

        ...(p.mode === 'vert' && {
          width: iconSize,
          height: twCalc,
        }),
      }}
      renderLabel={(v, selected) => {
        return (
          <Label
            data-selected={selected}
            style={{ width: iconSize, height: iconSize }}
          >
            <IconStyled>
              {v.icon({ style: { fill: selected ? fill : 'white' } })}
            </IconStyled>
          </Label>
        );
      }}
    />
  );
};
