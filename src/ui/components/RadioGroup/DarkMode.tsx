'use client';
import styled from '@emotion/styled';
import React, { useState } from 'react';

import { Computer, Moon, Sun } from '../../icons';
import { FlexColumn } from '../FlexColumn';
import { Icon } from '../Icon';
import { RadioGroup } from '.';

export enum TDarkMode {
  'dark',
  'light',
  'system',
}

const iconSize = 2.5;
const pad = '20px';

const RadioGroupStyled = styled(RadioGroup)`
  height: ${iconSize}rem;
  width: calc(${iconSize * 3}rem + ${pad});
  border: solid 2px #ccc;

  &[data-mode='vert'] {
    height: calc(${iconSize * 3}rem + ${pad});
    width: ${iconSize}rem;
  }
` as typeof RadioGroup;

const IconStyled = styled(Icon)`
  > svg {
    height: 60%;
  }
`;

const Label = styled(FlexColumn)`
  border-radius: 50%;
  overflow: hidden;
  width: ${iconSize}rem;
  height: ${iconSize}rem;
  &[data-selected='true'] {
    background-color: white;
  }
`;

const getColours = (p: TDarkMode) => {
  switch (p) {
    case TDarkMode.dark: {
      return 'rebeccapurple';
    }
    case TDarkMode.light: {
      return 'darkorange';
    }
    case TDarkMode.system: {
      return 'green';
    }
  }
};

export interface IDarkMode {
  /** default system */
  default?: TDarkMode;
  onSubmit: (p: TDarkMode) => void;
  /** default horiz */
  mode?: 'vert' | 'horiz';
}

export const DarkMode = (p: IDarkMode) => {
  const v: {
    mode: TDarkMode;
    icon: (p: { style: { fill: string } }) => JSX.Element;
  }[] = [
    { mode: TDarkMode.dark, icon: Moon },
    { mode: TDarkMode.system, icon: Computer },
    { mode: TDarkMode.light, icon: Sun },
  ];

  let defaultIndex = v.findIndex((v2) => v2.mode === p.default);
  if (defaultIndex === -1) {
    defaultIndex = 1;
  }

  const [index, setIndex] = useState<number>(defaultIndex);
  const fg = getColours(v[index].mode);

  return (
    <RadioGroupStyled
      mode={p.mode}
      values={v}
      defaultIndex={index}
      onSubmit={(v, i) => {
        setIndex(i);
        p.onSubmit(v.mode);
      }}
      style={{ backgroundColor: fg }}
      renderLabel={(v, selected) => {
        return (
          <Label data-selected={selected}>
            <IconStyled>
              {v.icon({ style: { fill: selected ? fg : 'white' } })}
            </IconStyled>
          </Label>
        );
      }}
    />
  );
};
