/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect, useRef } from 'react';
import { SaveIcon, UndoIcon } from './images';
import { Icon, ValueBox } from './common';
import { useOnClickOutside } from '../../helpers/useOnClickOutside';
import { noDrag } from '../../styles/common';
export const ColourEdit = ({
  defaultValue,
  onSubmit,
}: {
  defaultValue: string;
  onSubmit: (val: string) => void;
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
      <input
        type="color"
        size={5}
        value={value}
        onChange={(v) => setValue(v.target.value)}
      />
      {value !== defaultValue && (
        <Icon
          style={{ right: '2rem' }}
          onClick={() => valueChange && onSubmit(value.trim())}
        >
          <SaveIcon />
        </Icon>
      )}
      {valueChange && (
        <Icon
          style={{ right: '0.5rem' }}
          onClick={() => setValue(defaultValue)}
        >
          <UndoIcon />
        </Icon>
      )}
    </ValueBox>
  );
};
