'use client';
import React, { useEffect, useRef, useState } from 'react';

import { useOnClickOutside } from '../../helpers/useOnClickOutside';
import { Save } from '../../icons/Save';
import { Undo } from '../../icons/Undo';
import { noDrag } from '../../styles/common';
import { IconD as Icon, iconLeft, iconRight, ValueBox } from './common';

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
          style={iconLeft}
          onClick={() => valueChange && onSubmit(value.trim())}
        >
          <Save />
        </Icon>
      )}
      {valueChange && (
        <Icon
          style={{ ...iconRight, fill: '#134563' }}
          onClick={() => setValue(defaultValue)}
        >
          <Undo />
        </Icon>
      )}
    </ValueBox>
  );
};
