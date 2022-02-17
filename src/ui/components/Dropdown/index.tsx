import { ModalDropList } from '../Modal';
import { noDrag } from '../../styles/common';
import React, { useState } from 'react';
import styled from 'styled-components';

const Base = styled.div`
  cursor: pointer;
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

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  &[data-fixedsize='true'] {
    width: 1.5rem;
    height: 1.5rem;
    top: -0.5rem;
    right: -0.5rem;
    position: absolute;
  }
  border: solid 1px #ccc;
  border-radius: 50%;
  background-color: white;
`;

export const Dropdown = ({
  options,
  position = 'left',
  topPosition,
  onSelect,
  className,
  enableHoverOpen = false,
  children,
}: {
  className?: string;
  options: (string | JSX.Element)[];
  topPosition?: 'top' | 'bottom';
  position?: 'left' | 'right';
  onSelect: (
    i: number,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  enableHoverOpen?: boolean;
  children?: JSX.Element;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Base
      onKeyPress={(e) => e.key === 'Enter' && setOpen(!open)}
      onMouseEnter={() => enableHoverOpen && setOpen(true)}
      onMouseLeave={() => enableHoverOpen && setOpen(false)}
      className={className}
      {...noDrag}
    >
      <Icon
        data-fixedsize={!children}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setOpen(!open);
        }}
      >
        {children || Dots}
      </Icon>
      <ModalDropList
        position={position}
        topPosition={topPosition}
        options={options}
        open={open}
        setOpen={setOpen}
        onSelect={onSelect}
        showCloseButton={false}
      />
    </Base>
  );
};
