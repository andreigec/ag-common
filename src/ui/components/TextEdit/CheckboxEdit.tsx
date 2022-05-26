import { SaveIcon, UndoIcon } from './images';
import {
  IconD as Icon,
  iconLeft,
  iconRight,
  ValueBox,
  ValueInputCB,
} from './common';
import { noDrag } from '../../styles/common';
import { useOnClickOutside } from '../../helpers/useOnClickOutside';
import { FlexRow } from '../FlexRow';
import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';

const Icons = styled(FlexRow)`
  position: absolute;
  top: 0;
  right: -2rem;
`;

export const CheckboxEdit = ({
  defaultValue,
  onSubmit,
  noGrow = false,
}: {
  defaultValue: boolean;
  onSubmit: (val: boolean) => void;
  noGrow?: boolean;
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
        onChange={() => setValue(!value)}
        onKeyPress={(e) =>
          e.key === 'Enter' && value !== defaultValue && onSubmit(value)
        }
      />
      <Icons center enableOverflow>
        {value !== defaultValue && (
          <Icon
            style={iconLeft}
            onClick={() => value !== defaultValue && onSubmit(value)}
          >
            <SaveIcon />
          </Icon>
        )}
        {value !== defaultValue && (
          <Icon style={iconRight} onClick={() => setValue(defaultValue)}>
            <UndoIcon />
          </Icon>
        )}
      </Icons>
    </ValueBox>
  );
};
