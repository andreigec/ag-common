'use client';
import styled from '@emotion/styled';
import React, {
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
} from 'react';

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
    margin: 0;
    padding: 0;
    padding-top: 0.5rem;
    width: 100%;
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
`;
export interface ISearchBox {
  placeholderText?: string;
  searchText: string;
  setSearchText: (val: string, enterPressed: boolean) => void;
  defaultValue?: string;
  className?: string;
}
export const SearchBox = forwardRef<IRefTextEdit, ISearchBox>((p, ref) => {
  const textEditRef = createRef<IRefTextEdit>();
  useImperativeHandle(ref, () => ({
    setValue: (v) => {
      const value = textEditRef.current?.getValue();
      if (v === value) {
        return;
      }
      textEditRef.current?.setValue(v);
    },
    focus: () => textEditRef.current?.focus(),
    getValue: () => textEditRef.current?.getValue(),
  }));
  useEffect(() => {
    textEditRef?.current?.setValue(p.searchText);
  }, [p.searchText, textEditRef]);

  return (
    <Base data-type="search" className={p.className} {...filterDataProps(p)}>
      <TextEditStyled
        ref={textEditRef}
        placeholder={p.placeholderText}
        defaultEditing={{ focus: true }}
        singleLine
        leftContent={
          <MagnifyIcon
            onClick={() =>
              p.setSearchText(textEditRef?.current?.getValue() || '', true)
            }
          >
            <Magnify />
          </MagnifyIcon>
        }
        noGrow
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
            textEditRef.current?.setValue('');
            p.setSearchText('', true);
          }}
        />
      )}
    </Base>
  );
});
