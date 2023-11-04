'use client';
import styled from '@emotion/styled';
import React from 'react';

import { useCookie } from '../../helpers/cookie/use';
import { Computer, Moon, Sun } from '../../icons';
import { FlexColumn } from '../FlexColumn';
import { Icon } from '../Icon';
import { RadioGroup } from './Base';
import { TDarkMode } from './types';

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

const modes: {
  mode: TDarkMode;
  icon: (p: { style: { fill: string } }) => JSX.Element;
}[] = [
  { mode: TDarkMode.dark, icon: Moon },
  { mode: TDarkMode.system, icon: Computer },
  { mode: TDarkMode.light, icon: Sun },
];

export interface IDarkMode {
  onSubmit?: (p: TDarkMode) => void;
  /** default horiz */
  mode?: 'vert' | 'horiz';
  /** default 2.5rem */
  iconSize?: string;
  className?: string;
  cookieDocument: string;
}
/** shows darkmode toggle. Persists to cookie, and modifies html classList with either dark-mode or light-mode */
export const DarkMode = (p: IDarkMode) => {
  const { iconSize = '2.5rem' } = p;

  const [darkmode, setDarkmodeRaw] = useCookie<TDarkMode>({
    defaultValue: TDarkMode.system,
    name: 'darkmode',
    cookieDocument: p.cookieDocument,
    parse: (v) => Number(v) as TDarkMode,
    stringify: (v) => v.toString(),
  });
  const index = modes.findIndex((d) => d.mode === darkmode);

  const [fill, background] = getColours(modes[index].mode, p.mode === 'vert');
  const twCalc = `calc(${iconSize} + ${iconSize} + ${iconSize} + 20px)`;

  const setDarkmode = (newDarkMode: TDarkMode) => {
    let className = '';
    if (newDarkMode === TDarkMode.dark) {
      className += 'dark-mode';
    } else if (newDarkMode === TDarkMode.light) {
      className += 'light-mode';
    } else {
      className = '';
    }
    document.getElementsByTagName('html')[0].classList.remove('dark-mode');
    document.getElementsByTagName('html')[0].classList.remove('light-mode');
    if (className) {
      document.getElementsByTagName('html')[0].classList.add(className);
    }

    setDarkmodeRaw(newDarkMode);
    p.onSubmit?.(newDarkMode);
  };

  return (
    <RadioGroup
      className={p.className}
      mode={p.mode}
      values={modes}
      defaultIndex={index}
      onSubmit={({ mode }) => {
        setDarkmode(mode);
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
