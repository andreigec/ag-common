import { colours } from '../../styles/colours';
import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

const SBase = styled.div`
  display: flex;
  flex-flow: row;
  position: relative;
  min-width: 5rem;
  align-items: center;
  justify-content: space-between;
  cursor: default;
  background-color: ${colours.darker};
  color: ${colours.dark};
  cursor: pointer;
  flex-grow: 1;
`;

const SItems = styled.div<{ open?: boolean }>`
  flex-flow: column;
  z-index: 5;
  top: 100%;
  display: none;
  position: absolute;
  background-color: ${colours.mainLight};
  cursor: default;
  width: 100%;
  ${({ open }) =>
    open &&
    css`
      display: flex;
    `}
`;

const SSelectedItem = styled.div`
  font-weight: 500;
  padding: 0.5rem;
`;

const SItem = styled.div<{ selected?: boolean }>`
  z-index: 1;
  word-break: break-all;
  font-weight: 500;
  padding-left: 0.5rem;
  flex-grow: 1;
  padding: 1rem;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    css`
      opacity: 1 !important;
    `}
  &:hover {
    opacity: 0.9 !important;
    background-color: ${colours.orange} !important;
  }
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${colours.orangeRed} !important;
      &:hover {
        background-color: ${colours.orangeRed} !important;
      }
    `}
  &:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

function Items<T>({
  options,
  state,
  onChange,
  renderF,
}: {
  options: T[];
  state: T;
  onChange: (v: T, index: number) => void;
  renderF: (v: T) => string;
}) {
  return (
    <>
      {options.map((s, i) => (
        <SItem
          key={renderF(s)}
          selected={s === state}
          onClick={() => {
            if (s !== state) {
              onChange(s, i);
            }
          }}
        >
          {renderF(s)}
        </SItem>
      ))}
    </>
  );
}

const ChevronStyled = styled.div`
  margin-right: 0.5rem;
`;

export function DropdownList<T>({
  options,
  value,
  onChange,
  placeholder,
  className,
  renderF,
}: {
  options: T[];
  value: T;
  onChange: (v: T, index: number) => void;
  placeholder?: string;
  className?: string;
  renderF: (v: T) => string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(value);
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const click = (e: any) => {
    const outside = !ref.current?.contains(e.target);
    if (outside) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', click, true);
    return () => document.removeEventListener('click', click, true);
  }, []);

  useEffect(() => {
    setState(value);
  }, [value]);
  return (
    <SBase
      className={className}
      ref={ref}
      title={placeholder}
      onClick={(e) => {
        e.stopPropagation();
        setOpen(!open);
      }}
    >
      <SSelectedItem>{renderF(state)}</SSelectedItem>

      <ChevronStyled>{open ? '˄' : '˅'}</ChevronStyled>
      <SItems open={open}>
        {open && (
          <Items
            renderF={renderF}
            state={state}
            options={options}
            onChange={onChange}
          />
        )}
      </SItems>
    </SBase>
  );
}
