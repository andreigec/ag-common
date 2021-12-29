import React, { useState } from 'react';
import { getRandomInt } from '../../../common/helpers/math';
import { Input, InputTypes } from '../Input';

export const TextInput = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  onKeyPress,
  label,
  disabled = false,
  className,
}: {
  className?: string;
  disabled?: boolean;
  label?: string | JSX.Element;
  placeholder?: string;
  type: InputTypes;
  value: string;
  onChange: (value: string) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {
  const [id] = useState(getRandomInt(1000).toString());

  return (
    <Input
      className={className}
      disabled={disabled}
      id={id}
      label={label}
      type={type}
      placeholder={placeholder}
      required
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={(e) =>
        onKeyPress && onKeyPress(e as React.KeyboardEvent<HTMLInputElement>)
      }
    />
  );
};
