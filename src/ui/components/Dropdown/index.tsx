import { DropdownModal } from './Modal';
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
  /**
   * if not provided, will show ... dots to click to open (default)
   */
  children?: JSX.Element;
}) => {
  const [open, setOpen] = useState(false);
  const child = !children ? (
    <Icon
      data-fixedsize={true}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        setOpen(!open);
      }}
    >
      {Dots}
    </Icon>
  ) : (
    <div
      tabIndex={-1}
      role="button"
      onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}
      data-fixedsize={false}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        setOpen(!open);
      }}
    >
      {children}
    </div>
  );

  return (
    <Base
      onKeyPress={(e) => e.key === 'Enter' && setOpen(!open)}
      onMouseEnter={() => enableHoverOpen && setOpen(true)}
      onMouseLeave={() => enableHoverOpen && setOpen(false)}
      className={className}
      {...noDrag}
    >
      {child}

      <DropdownModal
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
