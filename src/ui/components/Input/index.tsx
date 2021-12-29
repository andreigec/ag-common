import styled, { css } from 'styled-components';
import React from 'react';
import { colours } from '../../styles/colours';

export type InputTypes = 'password' | 'email' | 'text' | 'textarea';

const inputcss = css`
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

const SInput = styled.input`
  ${inputcss}
`;

const STextArea = styled.textarea`
  ${inputcss};
  resize: none;
  overflow-y: auto;
`;

export const Input = ({
  label,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
  onKeyPress,
  id,
  disabled,
  className,
}: {
  className?: string;
  disabled?: boolean;
  id?: string;
  label?: string | JSX.Element;
  type: InputTypes;
  placeholder?: string;
  required: boolean;
  autoComplete?: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onKeyPress?: (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}) => {
  return (
    <>
      {id && label ? <label htmlFor={id}>{label}</label> : ''}
      {type === 'textarea' && (
        <STextArea
          className={className}
          disabled={disabled}
          id={id}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      )}
      {type !== 'textarea' && (
        <SInput
          className={className}
          disabled={disabled}
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      )}
    </>
  );
};
