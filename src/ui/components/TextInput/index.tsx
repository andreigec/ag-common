import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getRandomInt } from '../../../common/helpers/math';
import { colours } from '../../styles/colours';

const Base = styled.input`
  font-size: 1.2rem;
  border: solid 1px ${colours.lightCharcoal};
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: calc(100% - 1.5rem);
  &:disabled {
    background-color: ${colours.darker};
    cursor: not-allowed;
  }
`;

export const TextInput = ({
  placeholder,
  value,
  onChange,
  onKeyPress,
  label,
  disabled = false,
  className,
  focus,
}: {
  focus?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string | JSX.Element;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {
  const [id] = useState(getRandomInt(1000).toString());
  const tiref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (focus && tiref?.current) {
      tiref.current.focus();
    }
  }, [focus]);

  return (
    <>
      {id && label ? <label htmlFor={id}>{label}</label> : ''}
      <Base
        ref={tiref}
        className={className}
        disabled={disabled}
        id={id}
        placeholder={placeholder}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(e) =>
          onKeyPress && onKeyPress(e as React.KeyboardEvent<HTMLInputElement>)
        }
      />
    </>
  );
};
