/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect, useRef } from 'react';
import { SaveIcon, UndoIcon } from './images';
import { Icon, ValueBox, ValueInputCB } from './common';
import { noDrag } from '../../styles/common';
import { useOnClickOutside } from '../../helpers/useOnClickOutside';
import styled from 'styled-components';
import { FlexRow } from '../FlexRow';

const Icons = styled(FlexRow)`
  position: absolute;
  top: 0;
  right: -2rem;
`;

export const CheckboxEdit = ({
  defaultValue,
  onSubmit,
}: {
  defaultValue: boolean;
  onSubmit: (val: boolean) => void;
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
    <ValueBox {...noDrag} ref={ref}>
      <ValueInputCB
        type="checkbox"
        data-type="checkbox"
        checked={value}
        onChange={() => setValue(!value)}
        onKeyPress={(e) =>
          e.key === 'Enter' && value !== defaultValue && onSubmit(value)
        }
      />
      <Icons center>
        {value !== defaultValue && (
          <Icon
            style={{ right: '2rem' }}
            onClick={() => value !== defaultValue && onSubmit(value)}
          >
            <SaveIcon />
          </Icon>
        )}
        {value !== defaultValue && (
          <Icon
            style={{ right: '0.5rem' }}
            onClick={() => setValue(defaultValue)}
          >
            <UndoIcon />
          </Icon>
        )}
      </Icons>
    </ValueBox>
  );
};
