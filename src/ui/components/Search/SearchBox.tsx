import styled from '@emotion/styled';
import React, { createRef, useEffect } from 'react';

import { debounce } from '../../helpers';
import { CrossIcon, Magnify } from '../../icons';
import { bigScreen, smallScreen } from '../../styles';
import { IRefTextEdit, TextEdit } from '../TextEdit';

const Base = styled.div`
  padding: 1rem;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: calc(100% - 2rem);
  margin: auto;

  @media ${smallScreen} {
    margin: 0;
    padding: 0;
    padding-top: 0.5rem;
    width: 100%;
  }
`;

const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;

const CrossIconStyled = styled(CrossIcon)`
  position: absolute;
  right: 1rem;
  @media ${bigScreen} {
    right: 2rem;
  }
`;
export interface ISearchBox {
  placeholderText?: string;
  onClear?: () => void;
  searchText: string;
  setSearchText: (s: string) => void;
  onSearchTextChange?: (v: string) => void;
  defaultValue?: string;
  className?: string;
}
export const SearchBox = (p: ISearchBox) => {
  const textEditRef = createRef<IRefTextEdit>();
  useEffect(() => {
    textEditRef.current?.setValue(p.searchText);
  }, [p.searchText, textEditRef]);
  return (
    <Base data-type="search" className={p.className}>
      <TextEdit
        ref={textEditRef}
        placeholder={p.placeholderText}
        defaultEditing={{ focus: true }}
        singleLine
        leftContent={
          <Icon>
            <Magnify />
          </Icon>
        }
        noGrow
        allowUndo={false}
        onClickOutsideWithNoValue={null}
        onSubmit={(v) =>
          debounce(
            () => {
              p.setSearchText(v);
              p.onSearchTextChange?.(v);
            },
            { key: 'pagesearch', time: 200 },
          )
        }
        defaultValue={p.defaultValue}
      />
      {p.searchText && (
        <CrossIconStyled
          onClick={() => {
            textEditRef.current?.setValue('');
            p.setSearchText('');
            p.onSearchTextChange?.('');
          }}
        />
      )}
    </Base>
  );
};
