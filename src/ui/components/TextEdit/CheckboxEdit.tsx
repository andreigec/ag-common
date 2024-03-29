'use client';
import styled from '@emotion/styled';
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

export interface ICheckboxEdit {
  className?: string;
  defaultValue: boolean;
  onSubmit: (val: boolean) => void;
  noGrow?: boolean;
  /**
   * if true, will add undo button after changes. if false, will submit after every keypress. default false
   */
  allowUndo?: boolean;
  /** display to right of CB */
  rightSpan?: React.ReactNode;
}

export const CheckboxEdit = ({
  defaultValue,
  onSubmit,
  noGrow = false,
  allowUndo = false,
  rightSpan,
  className,
}: ICheckboxEdit) => {
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
    <ValueBox
      {...noDrag}
      className={className}
      style={{ cursor: 'pointer', width: 'fit-content', flexGrow: 0 }}
      ref={ref}
      data-nogrow={noGrow}
      onClick={(e) => {
        if (allowUndo) {
          setValue(!value);
        } else {
          onSubmit(!value);
        }
        e.stopPropagation();
      }}
    >
      <ValueInputCB
        type="checkbox"
        data-type="checkbox"
        checked={value}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && value !== defaultValue) {
            onSubmit(value);
          }
          e.stopPropagation();
        }}
        onChange={(e) => {
          if (allowUndo) {
            setValue(!value);
          } else {
            onSubmit(!value);
          }
          e.stopPropagation();
        }}
      />
      {allowUndo && value !== defaultValue && (
        <Icons center>
          <Icon
            style={iconLeft}
            onClick={(e) => {
              if (value !== defaultValue) {
                onSubmit(value);
              }
              e.stopPropagation();
            }}
          >
            <Save />
          </Icon>
          <Icon
            style={{ ...iconRight, fill: '#134563' }}
            onClick={(e) => {
              setValue(defaultValue);
              e.stopPropagation();
            }}
          >
            <Undo />
          </Icon>
        </Icons>
      )}
      {!rightSpan ? '' : rightSpan}
    </ValueBox>
  );
};
