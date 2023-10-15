'use client';
import styled from '@emotion/styled';
import React, { createRef, useState } from 'react';

import { useGranularEffect } from '../../helpers/useGranularHook';
import { CrossIcon, Magnify } from '../../icons';
import { bigScreen, smallScreen } from '../../styles';
import type { IRefTextEdit } from '../TextEdit';
import { SearchBox } from './SearchBox';

const Base = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-left: 1rem;

  @media ${bigScreen} {
    width: 20rem;
  }
`;
const Icon = styled.div`
  display: flex;
  margin-right: 0.5rem;
  > svg {
    width: 1.2rem;
    height: 1.2rem;
    fill: white;
  }
`;
const SearchBoxStyled = styled(SearchBox)`
  transition: width 200ms ease-in-out;

  overflow: hidden;
  padding: 0;
  &[data-open='false'] {
    width: 0;
    padding: 0;
  }
  @media ${smallScreen} {
    padding: 0;
  }
`;
export interface IAutoHideSearchBox {
  searchText: string;
  setSearchText: (val: string, enterPressed: boolean) => void;
  onOpenToggle?: (open: boolean) => void;
  className?: string;
}
export const AutoHideSearchBox = (p: IAutoHideSearchBox) => {
  const [open, setOpen] = useState(!!p.searchText);

  const textEditRef = createRef<IRefTextEdit>();
  useGranularEffect(
    () => {
      const newOpen = !!p.searchText;
      if (newOpen !== open) {
        setOpen(!open);
        p.onOpenToggle?.(!open);
      }
    },
    [p.searchText],
    [open],
  );
  return (
    <Base className={p.className} data-open={open}>
      <Icon
        style={{ cursor: 'pointer' }}
        onClick={() => {
          if (open) {
            p.setSearchText('', false);
          }
          setOpen(!open);
          p.onOpenToggle?.(!open);
          if (!open) {
            textEditRef.current?.focus();
          }
        }}
      >
        {open && <CrossIcon />}
        {!open && <Magnify style={{ fill: 'white' }} />}
      </Icon>
      <SearchBoxStyled
        ref={textEditRef}
        {...p}
        className=""
        data-open={open}
        defaultValue={p.searchText}
        setSearchText={(val, enter) => {
          //we dont want empty enters to do anything
          if (val === '' && enter) {
            p.setSearchText(val, false);
          } else {
            p.setSearchText(val, enter);
          }
        }}
      />
    </Base>
  );
};
