import { SaveIcon, UndoIcon } from './images';
import { IconD as Icon, iconLeft, iconRight, ValueBox } from './common';
import { noDrag } from '../../styles/common';
import React, { useState, useEffect } from 'react';
export const ListboxEdit = ({
  defaultValue,
  onSubmit,
  values,
}: {
  defaultValue: string;
  onSubmit: (val: string[]) => void;
  values: string[];
}) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <ValueBox {...noDrag}>
      <select size={5} value={value} onChange={(v) => setValue(v.target.value)}>
        {values.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>
      {value !== defaultValue && (
        <Icon
          style={iconLeft}
          onClick={() =>
            value !== defaultValue &&
            onSubmit(value.split(',').map((s) => s.trim()))
          }
        >
          <SaveIcon />
        </Icon>
      )}
      {value !== defaultValue && (
        <Icon style={iconRight} onClick={() => setValue(defaultValue)}>
          <UndoIcon />
        </Icon>
      )}
    </ValueBox>
  );
};
