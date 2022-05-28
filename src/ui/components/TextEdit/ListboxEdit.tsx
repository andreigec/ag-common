import { SaveIcon, UndoIcon } from './images';
import { IconD as Icon, iconLeft, iconRight, ValueBox } from './common';
import { noDrag } from '../../styles/common';
import React, { useState, useEffect } from 'react';
export const ListboxEdit = <T,>({
  defaultValue,
  onSubmit,
  values,
  canEdit = true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderLabel = (e: T) => (e as any).toString(),
}: {
  defaultValue: T;
  onSubmit: (val: T) => void;
  values: T[];
  /**
   * if true can revert or explicit save. default true
   */
  canEdit?: boolean;
  /**
   * can overload the render of the label. defaults to toString
   */
  renderLabel?: (a: T) => string;
}) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <ValueBox {...noDrag}>
      <select
        size={5}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        value={(value as any).toString()}
        onChange={(v) =>
          canEdit
            ? setValue(v.target.value as unknown as T)
            : onSubmit(v.target.value as unknown as T)
        }
      >
        {values.map((v) => (
          <option
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            key={(value as any).toString()}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            value={(value as any).toString()}
          >
            {renderLabel(v)}
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
