import { IconD as Icon, iconLeft, iconRight, ValueBox } from './common';
import { useOnClickOutside } from '../../helpers/useOnClickOutside';
import { noDrag } from '../../styles/common';
import React, { useState, useEffect, useRef } from 'react';
import { Save } from '../../icons/Save';
import { Undo } from '../../icons/Undo';
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
        <Icon style={iconRight} onClick={() => setValue(defaultValue)}>
          <Undo />
        </Icon>
      )}
    </ValueBox>
  );
};
