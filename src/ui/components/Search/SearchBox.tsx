'use client';
import styled from '@emotion/styled';
import React, { useEffect } from 'react';

import { debounce } from '../../helpers/debounce';
import { filterDataProps } from '../../helpers/dom';
import { CrossIcon, Magnify } from '../../icons';
import { bigScreen, smallScreen } from '../../styles';
import type { IRefTextEdit } from '../TextEdit';
import { TextEdit } from '../TextEdit';

const Base = styled.div`
  padding: 1rem;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: calc(100% - 2rem);
  margin: auto;
  position: relative;

  @media ${smallScreen} {
    padding: 0.5rem;
    margin: 0;
    width: calc(100% - 1rem);
    max-height: calc(100% - 1rem);
  }
`;

const MagnifyIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  margin-left: 0.5rem;
`;

const CrossIconStyled = styled(CrossIcon)`
  position: absolute;
  right: 1rem;
  @media ${bigScreen} {
    right: 2rem;
  }
`;

const TextEditStyled = styled(TextEdit)`
  padding: 0;
  height: 2.5rem;
  background-color: white;
`;
export interface ISearchBox {
  placeholderText?: string;
  searchText: string;
  setSearchText: (val: string, enterPressed: boolean) => void;
  defaultValue?: string;
  className?: string;
  textBoxRef?: React.RefObject<IRefTextEdit>;
}
export const SearchBox = (p: ISearchBox) => {
  useEffect(() => {
    if (
      !p.textBoxRef?.current ||
      p.textBoxRef?.current.getValue() === p.searchText
    ) {
      return;
    }
    p.textBoxRef?.current.setValue(p.searchText);
    p.setSearchText(p.searchText, true);
  }, [p]);

  return (
    <Base data-type="search" className={p.className} {...filterDataProps(p)}>
      <TextEditStyled
        ref={p.textBoxRef}
        placeholder={p.placeholderText}
        defaultEditing={{ focus: true }}
        singleLine
        leftContent={
          <MagnifyIcon
            onClick={() =>
              p.setSearchText(p.textBoxRef?.current?.getValue() || '', true)
            }
          >
            <Magnify />
          </MagnifyIcon>
        }
        allowUndo={false}
        onClickOutsideWithNoValue={null}
        onSubmit={(v, enterPressed) =>
          debounce(
            () => {
              p.setSearchText(v, enterPressed);
            },
            { key: 'pagesearch', time: 200 },
          )
        }
        defaultValue={p.defaultValue}
      />
      {p.searchText && (
        <CrossIconStyled
          onClick={() => {
            p.textBoxRef?.current?.setValue('');
            p.setSearchText('', true);
          }}
        />
      )}
    </Base>
  );
};
