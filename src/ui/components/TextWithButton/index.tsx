import styled from '@emotion/styled';
import React, { useState } from 'react';

const Base = styled.div`
  display: flex;
  flex-flow: row;
`;

const Input = styled.input`
  flex-grow: 1;
  border: solid 3px #ccc;
  border-right: 0;
  padding-left: 0.5rem;
  border-radius: 0.5rem 0 0 0.5rem;
  overflow: hidden;
  font-size: 1.2rem;
  &[data-valid='false'] {
    border-color: indianred;
  }
  outline: 0;
`;

const Button = styled.button`
  padding: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(136 119 227);
  color: white;
  font-weight: bold;
  border-radius: 0 0.5rem 0.5rem 0;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  &[data-valid='false'] {
    cursor: not-allowed;
    border-color: indianred;
    background-color: #ccc;
  }
`;

export const TextWithButton = ({
  submitText = 'Submit',
  placeholder,
  validateF,
  onSubmit,
}: {
  /** default "Submit" */
  submitText?: string;
  placeholder?: string;
  /** if provided will validate and block submission accordingly */
  validateF?: (s: string) => boolean;
  onSubmit: (s: string) => void;
}) => {
  const [value, setValue] = useState('');
  const valid = !validateF ? true : validateF(value);

  return (
    <Base>
      <Input
        data-type="input"
        data-valid={valid}
        placeholder={placeholder}
        value={value}
        onChange={(s) => setValue(s.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && valid && onSubmit(value)}
      />
      <Button
        data-type="button"
        data-valid={valid}
        disabled={!valid}
        onClick={() => valid && onSubmit(value)}
      >
        {submitText}
      </Button>
    </Base>
  );
};
