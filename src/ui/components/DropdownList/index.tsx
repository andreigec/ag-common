import { colours } from '../../styles/colours';
import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '../Icon';
import { convertRemToPixels } from '../../helpers/dom';

const SBase = styled.div`
  display: flex;
  flex-flow: row;
  position: relative;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  flex-grow: 0;
`;

const SItems = styled.div<{ open?: boolean }>`
  flex-flow: column;
  z-index: 5;
  top: 100%;
  display: none;
  position: absolute;
  background-color: white;
  cursor: default;
  width: 100%;
  max-width: 95vw;
  ${({ open }) =>
    open &&
    css`
      display: flex;
    `}
`;

const Dots = (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
  >
    <path d="M16 12a3.001 3.001 0 016 0 3.001 3.001 0 01-6 0zm1 0a2 2 0 114.001.001A2 2 0 0117 12zm-8 0a3.001 3.001 0 016 0 3.001 3.001 0 01-6 0zm1 0a2 2 0 114.001.001A2 2 0 0110 12zm-8 0a3.001 3.001 0 016 0 3.001 3.001 0 01-6 0zm1 0a2 2 0 114.001.001A2 2 0 013 12z" />
  </svg>
);

const SItem = styled.div<{ selected?: boolean }>`
  z-index: 1;
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

export function DropdownList<T>({
  options,
  value,
  onChange,
  placeholder,
  className,
  renderF,
  children,
}: {
  options: T[];
  value?: T;
  onChange: (v: T, index: number) => void;
  placeholder?: string;
  className?: string;
  renderF: (v: T) => string;
  children?: JSX.Element;
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
    const newv = value;
    if (JSON.stringify(newv) !== JSON.stringify(value)) setState(newv);
  }, [options, value]);

  const maxLen = Math.max(...options.map((s) => renderF(s).length));
  const style: Record<string, string | number> = {
    width: `calc(${maxLen}ch + 2rem)`,
  };

  const minLeft = convertRemToPixels(2 + maxLen / 2);
  const offsetList = ref?.current?.offsetLeft ?? 0;

  if (offsetList < minLeft) {
    style.left = 0;
  } else {
    style.right = 0;
  }

  return (
    <SBase
      className={className}
      ref={ref}
      title={placeholder}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        setOpen(!open);
      }}
    >
      <SItems open={open} style={style}>
        {open &&
          options.map((s, i) => (
            <SItem
              key={renderF(s)}
              selected={s === state}
              onClick={(e) => {
                if (s !== state) {
                  onChange(s, i);
                }

                e.preventDefault();
              }}
            >
              {renderF(s)}
            </SItem>
          ))}
      </SItems>
      {children || (
        <Icon
          width="2rem"
          height="2rem"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setOpen(!open);
          }}
        >
          {Dots}
        </Icon>
      )}
    </SBase>
  );
}
