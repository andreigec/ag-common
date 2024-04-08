'use client';
import styled from '@emotion/styled';
import type { CSSProperties, Dispatch, SetStateAction } from 'react';
import React, { useState } from 'react';

import { useCookie } from '../../helpers/cookie/use';
import { Computer, Moon, Sun } from '../../icons';
import { FlexColumn } from '../FlexColumn';
import { Icon } from '../Icon';
import { TDarkMode, TDarkModeCalc } from './types';

const Base = styled.div`
  display: flex;
  flex-flow: row;
  &[data-mode='vert'] {
    flex-flow: column;
  }
  overflow: hidden;
  justify-content: space-between;
  border-radius: 2rem;
`;

const IconStyled = styled(Icon)`
  > svg {
    height: 60%;
  }
`;

const Label = styled(FlexColumn)`
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  &[data-selected='true'] {
    background-color: white;
    cursor: default;
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
  style?: CSSProperties;
  cookieDocument: string;
}

export interface IUseDarkMode {
  darkmode: TDarkMode;
  setDarkmode: Dispatch<SetStateAction<TDarkMode>>;
  /** converts system to the required output */
  calcDarkMode: () => TDarkModeCalc;
}

export const UseDarkMode = ({
  cookieDocument,
}: {
  cookieDocument: string;
}): IUseDarkMode => {
  const [darkmode, setDarkmode] = useCookie<TDarkMode>({
    defaultValue: TDarkMode.system,
    name: 'darkmode',
    cookieDocument,
    parse: (v) => Number(v) as TDarkMode,
    stringify: (v) => v.toString(),
  });

  const calcDarkMode = (): TDarkModeCalc => {
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    if (darkmode === TDarkMode.system) {
      return isDarkMode ? TDarkModeCalc.dark : TDarkModeCalc.light;
    }

    return darkmode === TDarkMode.dark
      ? TDarkModeCalc.dark
      : TDarkModeCalc.light;
  };

  return {
    darkmode,
    setDarkmode,
    calcDarkMode,
  };
};

/** shows darkmode toggle. Persists to cookie, and modifies html classList with either dark-mode or light-mode
 * this method has the darkmode passed in, so UseDarkMode can be used globally
 */
export const DarkModeAux = ({
  iconSize = '2.5rem',
  className,
  mode,
  onSubmit,
  style,
  dm,
}: IDarkMode & {
  dm: IUseDarkMode;
}) => {
  const [index, setIndex] = useState<number>(
    modes.findIndex((d) => d.mode === dm.darkmode),
  );
  const [fill, background] = getColours(modes[index].mode, mode === 'vert');
  const twCalc = `calc(${iconSize} + ${iconSize} + ${iconSize} )`;
  const setDarkmode = (newDarkMode: TDarkMode) => {
    let className = '';
    if (newDarkMode === TDarkMode.dark) {
      className += 'dark-mode';
    } else if (newDarkMode === TDarkMode.light) {
      className += 'light-mode';
    } else {
      className = '';
    }
    try {
      document.getElementsByTagName('html')[0].classList.remove('dark-mode');
      document.getElementsByTagName('html')[0].classList.remove('light-mode');
      if (className) {
        document.getElementsByTagName('html')[0].classList.add(className);
      }
    } catch (e) {
      //
    }

    dm.setDarkmode(newDarkMode);
    onSubmit?.(newDarkMode);
  };

  return (
    <Base
      className={className}
      data-mode={mode ?? 'horiz'}
      style={{
        ...style,
        background,
        border: `solid 2px ${fill}`,
        width: twCalc,
        height: iconSize,

        ...(mode === 'vert' && {
          width: iconSize,
          height: twCalc,
        }),
      }}
    >
      {modes.map((v, i) => {
        const selected = index === i;
        return (
          <Label
            data-selected={selected}
            style={{ width: iconSize, height: iconSize }}
            // eslint-disable-next-line react/no-array-index-key
            key={i.toString()}
            onClick={() => {
              if (index === i) {
                return;
              }
              setIndex(i);
              setDarkmode(v.mode);
            }}
          >
            <IconStyled>
              {v.icon({ style: { fill: selected ? fill : 'white' } })}
            </IconStyled>
          </Label>
        );
      })}
    </Base>
  );
};

/** shows darkmode toggle. Persists to cookie, and modifies html classList with either dark-mode or light-mode */
export const DarkMode = (p: IDarkMode) => {
  const dm = UseDarkMode({ cookieDocument: p.cookieDocument });
  return DarkModeAux({ ...p, dm });
};
