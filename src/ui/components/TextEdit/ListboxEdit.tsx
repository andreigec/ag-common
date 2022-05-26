import { SaveIcon, UndoIcon } from './images';
import { IconD as Icon, iconLeft, iconRight, ValueBox } from './common';
import { noDrag } from '../../styles/common';
import React, { useState, useEffect } from 'react';
export const ListboxEdit = ({
  defaultValue,
  onSubmit,
  values,
  canEdit = true,
}: {
  defaultValue: string;
  onSubmit: (val: string) => void;
  values: string[];
  /**
   * if true can revert or explicit save. default true
   */
  canEdit?: boolean;
}) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <ValueBox {...noDrag}>
      <select
        size={5}
        value={value}
        onChange={(v) =>
          canEdit ? setValue(v.target.value) : onSubmit(v.target.value)
        }
      >
        {values.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>
      {canEdit && value !== defaultValue && (
        <Icon
          style={iconLeft}
          onClick={() => value !== defaultValue && onSubmit(value)}
        >
          <SaveIcon />
        </Icon>
      )}
      {canEdit && value !== defaultValue && (
        <Icon style={iconRight} onClick={() => setValue(defaultValue)}>
          <UndoIcon />
        </Icon>
      )}
    </ValueBox>
  );
};
