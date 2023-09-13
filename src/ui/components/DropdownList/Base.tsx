'use client';
import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';

import { convertRemToPixels } from '../../helpers/dom';
import { useOnClickOutside } from '../../helpers/useOnClickOutside';
import { colours } from '../../styles/colours';
import { bounce } from '../../styles/common';
import { KebabDots } from '../KebabDots';
import type { IDropdownList } from './types';

const Base = styled.div`
  display: flex;
  flex-flow: row;
  position: relative;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  flex-grow: 0;
`;

const DropItems = styled.div`
  flex-flow: column;
  z-index: 5;
  display: none;
  background-color: white;
  cursor: default;
  width: 100%;
  position: absolute;

  overflow-y: auto;
  &[data-open='true'] {
    display: flex;
  }
  ${bounce('data-bounced')}
`;

const ListItemStyle = styled.div`
  z-index: 1;
  font-weight: 500;
  padding-left: 0.5rem;
  flex-grow: 1;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  &[data-default='false'] {
    &[data-selected='true'] {
      opacity: 1 !important;
      background-color: ${colours.orangeRed} !important;
    }
    &[data-selected='false'] {
      &:hover {
        opacity: 0.9 !important;
        background-color: ${colours.orange} !important;
      }
    }
  }

  &:nth-of-type(even) {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const ListItem = ({
  render,
  onChange,
  selected,
  defaultV = false,
}: {
  defaultV?: boolean;
  selected: boolean;
  render: JSX.Element | string;
  onChange?: () => void;
}) => (
  <ListItemStyle
    data-selected={selected}
    data-default={defaultV}
    onClick={(e) => {
      if (!selected) {
        onChange?.();
      }

      e.preventDefault();
    }}
  >
    {render}
  </ListItemStyle>
);

export function DropdownList<T>(p: IDropdownList<T>) {
  const {
    options,
    value,
    placeholder,
    className,
    renderF,
    shadow = '#555',
    maxHeight = '50vh',
  } = p;

  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(value);
  const [open, setOpen] = useState(p.open);
  const [bounced, setBounced] = useState(false);
  useOnClickOutside({ disabled: !open, ref, moveMouseOutside: false }, () => {
    setOpen(false);
    setBounced(false);
    p.onChange(undefined, 0);
  });

  useEffect(() => {
    const newv = value;
    if (JSON.stringify(newv) !== JSON.stringify(value)) {
      setState(newv);
    }
  }, [options, value]);

  const [style, setStyle] = useState<Record<string, string | number>>({});
  useEffect(() => {
    const maxLen = 20;
    const newStyle: Record<string, string | number> = {
      minWidth: `calc(${maxLen}ch + 2rem)`,
    };

    const minPx = convertRemToPixels(2 + maxLen / 2);
    const offsetLeft = ref?.current?.offsetLeft ?? 0;
    if (offsetLeft < minPx) {
      newStyle.left = '0';
    } else {
      newStyle.right = '0';
    }

    const b = ref?.current?.getBoundingClientRect() ?? { bottom: 0 };
    const ih = typeof window !== 'undefined' ? window.innerHeight : 0;
    //below screen
    if (b.bottom + 50 > ih) {
      newStyle.bottom = '1rem';
    } else {
      newStyle.top = '0';
    }

    newStyle.filter = `drop-shadow(1px 1px 0.5rem ${shadow})`;
    newStyle.maxHeight = maxHeight;

    if (JSON.stringify(style) !== JSON.stringify(newStyle)) {
      setStyle(newStyle);
    }
  }, [maxHeight, open, options, renderF, shadow, style]);

  const defaultRender = !p.value ? <KebabDots /> : <>{p.renderF(p.value)}</>;
  const openDisplay = p.children || (
    <ListItem
      selected
      render={defaultRender}
      key={defaultRender.key}
      defaultV={!p.value}
    />
  );

  useEffect(() => {
    if (!bounced && open) {
      setBounced(true);
    }
  }, [bounced, open]);

  return (
    <Base
      className={className}
      ref={ref}
      title={placeholder}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        setOpen(!open);
      }}
    >
      <DropItems data-open={open} style={style} data-bounced={bounced}>
        {open &&
          options.map((s, i) => (
            <ListItem
              key={p.renderF(s).key}
              render={p.renderF(s)}
              onChange={() => p.onChange(s, i)}
              selected={s === state}
            />
          ))}
      </DropItems>

      {openDisplay}
    </Base>
  );
}
