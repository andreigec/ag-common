import { IDropdownList } from './types';
import { Icon } from '../Icon';
import { convertRemToPixels } from '../../helpers/dom';
import { Shadow } from '../../styles/common';
import { useOnClickOutside } from '../../helpers/useOnClickOutside';
import { colours } from '../../styles/colours';
import styled, { css } from 'styled-components';
import React, { useEffect, useState, useRef } from 'react';

const SBase = styled.div`
  display: flex;
  flex-flow: row;
  position: relative;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  flex-grow: 0;
`;

const DropItems = styled.div<{
  shadow?: string;
  maxHeight: string;
}>`
  flex-flow: column;
  z-index: 5;
  display: none;
  background-color: white;
  cursor: default;
  width: 100%;
  position: absolute;
  ${({ shadow }) => shadow && Shadow(shadow)}
  ${({ maxHeight }) =>
    maxHeight &&
    css`
      max-height: ${maxHeight};
    `}

  overflow-y: auto;
  &[data-open='true'] {
    display: flex;
  }
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

const IconStyled = styled(Icon)`
  position: absolute;
`;

const ListItemStyle = styled.div`
  z-index: 1;
  font-weight: 500;
  padding-left: 0.5rem;
  flex-grow: 1;
  padding: 1rem;
  cursor: pointer;
  &[data-selected='true'] {
    cursor: default;
    opacity: 1 !important;
    background-color: ${colours.orangeRed} !important;
  }
  &[data-selected='false'] {
    &:hover {
      opacity: 0.9 !important;
      background-color: ${colours.orange} !important;
    }
  }

  &:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const ListItem = <T,>({
  s,
  i,
  renderF,
  onChange,
  state,
}: {
  s: T;
  i: number;
  renderF: (v: T) => string;
  state: T | undefined;
  onChange: (v: T, index: number) => void;
}) => (
  <ListItemStyle
    key={renderF(s)}
    data-selected={s === state}
    onClick={(e) => {
      if (s !== state) {
        onChange(s, i);
      }

      e.preventDefault();
    }}
  >
    {renderF(s)}
  </ListItemStyle>
);

export function DropdownList<T>(p: IDropdownList<T>) {
  const {
    options,
    value,
    placeholder,
    className,
    renderF,
    children,
    shadow = '#555',
    maxHeight = '50vh',
    defaultOpen = false,
  } = p;

  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(value);
  const [open, setOpen] = useState(false);
  useOnClickOutside({ disabled: !open, ref, moveMouseOutside: false }, () => {
    setOpen(false);
  });

  useEffect(() => {
    const newv = value;
    if (JSON.stringify(newv) !== JSON.stringify(value)) {
      setState(newv);
    }
  }, [options, value]);

  const [style, setStyle] = useState<Record<string, string | number>>({});
  useEffect(() => {
    const maxLen = Math.max(...options.map((s) => renderF(s).length));
    const newStyle: Record<string, string | number> = {
      width: defaultOpen ? '100%' : `calc(${maxLen}ch + 2rem)`,
    };

    const minPx = convertRemToPixels(2 + maxLen / 2);
    const offsetLeft = ref?.current?.offsetLeft ?? 0;

    if (offsetLeft < minPx) {
      newStyle.left = '0';
    } else {
      newStyle.right = '1rem';
    }

    const b = ref?.current?.getBoundingClientRect() ?? { bottom: 0 };
    const ih = typeof window !== 'undefined' ? window.innerHeight : 0;
    //below screen
    if (b.bottom + 50 > ih) {
      newStyle.bottom = '1rem';
    } else if (!defaultOpen) {
      newStyle.top = '100%';
    } else if (defaultOpen) {
      newStyle.top = '0';
    }

    if (JSON.stringify(style) !== JSON.stringify(newStyle)) {
      setStyle(newStyle);
    }
  }, [defaultOpen, open, options, renderF, style]);
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
      <DropItems
        data-open={open}
        style={style}
        shadow={shadow}
        maxHeight={maxHeight}
      >
        {open &&
          options.map((s, i) => (
            <ListItem key={p.renderF(s)} s={s} i={i} {...p} state={state} />
          ))}
      </DropItems>

      {children ||
        (!defaultOpen ? (
          <IconStyled
            width="2rem"
            height="2rem"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setOpen(!open);
            }}
          >
            {Dots}
          </IconStyled>
        ) : (
          <ListItem
            key={p.renderF(options[0])}
            s={options[0]}
            i={0}
            {...p}
            state={state}
          />
        ))}
    </SBase>
  );
}
