'use client';
import styled from '@emotion/styled';
import type { CSSProperties } from 'react';
import React, { useEffect, useRef, useState } from 'react';

import { useOnClickOutside } from '../../helpers/useOnClickOutside';
import { Save } from '../../icons/Save';
import { Undo } from '../../icons/Undo';
import { noDrag } from '../../styles/common';
import { FlexRow } from '../FlexRow';
import {
  IconD as Icon,
  iconLeft,
  iconRight,
  ValueBox,
  ValueInputCB,
} from './common';

const Icons = styled(FlexRow)`
  position: absolute;
  top: 0;
  right: -2rem;
`;

export const CheckboxEdit = ({
  defaultValue,
  onSubmit,
  noGrow = false,
  /** default allowUndo=true */
  allowUndo = true,
  rightSpan,
}: {
  defaultValue: boolean;
  onSubmit: (val: boolean) => void;
  noGrow?: boolean;
  /**
   * if true, will add undo button after changes. if false, will submit after every keypress. default true
   */
  allowUndo: boolean;
  /** display to right of CB */
  rightSpan?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  const valueChange = value !== defaultValue;
  useOnClickOutside({ ref, moveMouseOutside: false }, () => {
    if (valueChange) {
      onSubmit(value);
    }
  });

  return (
    <ValueBox {...noDrag} ref={ref} data-nogrow={noGrow}>
      <ValueInputCB
        type="checkbox"
        data-type="checkbox"
        checked={value}
        onChange={() => {
          if (allowUndo) {
            setValue(!value);
          } else {
            onSubmit(!value);
          }
        }}
        onKeyDown={(e) =>
          e.key === 'Enter' && value !== defaultValue && onSubmit(value)
        }
      />
      {allowUndo && value !== defaultValue && (
        <Icons center enableOverflow>
          <Icon
            style={iconLeft}
            onClick={() => value !== defaultValue && onSubmit(value)}
          >
            <Save />
          </Icon>
          <Icon
            style={{ ...iconRight, fill: '#134563' }}
            onClick={() => setValue(defaultValue)}
          >
            <Undo />
          </Icon>
        </Icons>
      )}
      {!rightSpan ? '' : rightSpan}
    </ValueBox>
  );
};
