'use client';
import styled from '@emotion/styled';
import React, {
  cloneElement,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { take } from '../../../common/helpers/array';
import { smallScreen } from '../../styles';
import type { IRefTextEdit } from '../TextEdit/types';
import { SearchBox } from './SearchBox';
import type { ISearchDialog } from './types';

const Base = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  width: 100%;
  height: calc(100% - 1rem);
  @media ${smallScreen} {
    height: calc(100% - 0.5rem);
  }
`;

const Content = styled.div`
  width: calc(100% - 2rem);
  margin: auto;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  flex-grow: 1;
  &[data-hasitems='true'] {
    padding-bottom: 0.5rem;
  }
  @media ${smallScreen} {
    margin: 0;
    width: calc(100% - 0.5rem);
  }
`;

const RowCount = styled.div`
  width: 100%;
  text-align: center;
  width: fit-content;
  text-decoration-color: currentcolor;
  text-decoration: underline;

  &[data-top='true'] {
    padding-bottom: 0.5rem;
  }
  &[data-top='false'] {
    padding-top: 0.5rem;
  }
`;

export const SearchInline = <T,>(p: ISearchDialog<T>) => {
  const { maxDisplayItems = 1000 } = p;
  const rowCountOptDisplay = p?.rowCountOpt?.display ?? 'bottom';
  const [searchText, setSearchText] = useState(p.defaultValue ?? '');

  useImperativeHandle(p.textBoxRef, () => ({
    setValue: (v) => {
      const value = textBoxRef?.current?.getValue();
      if (v === value) {
        return;
      }
      textBoxRef?.current?.setValue(v);
      setSearchText(v);
    },
    focus: () => textBoxRef?.current?.focus(),
    getValue: () => textBoxRef?.current?.getValue(),
  }));
  const textBoxRef = useRef<IRefTextEdit>(null);

  const resWrap = (foundItem: T | undefined, target: EventTarget) => {
    if (!foundItem) {
      p.onSelectItem?.(undefined);
    } else {
      p.onSelectItem?.({ foundItem, searchText, target });
    }
  };

  const filteredItemsRaw = p.displayItems.filter((i) =>
    p.willDisplayItem(searchText, i),
  );

  const { part: filteredItems } = take(
    filteredItemsRaw,
    maxDisplayItems < 0 ? filteredItemsRaw.length : maxDisplayItems,
  );
  const outdiff = filteredItems.length !== p.displayItems.length;
  const showText =
    p.texts?.totalItems?.(filteredItems.length, p.displayItems.length) ??
    `Showing ${filteredItems.length} out of ${p.displayItems.length} total
  items`;

  return (
    <Base className={p.className}>
      <SearchBox
        {...p}
        searchText={searchText}
        setSearchText={(t) => {
          setSearchText(t);
          p.onSearchTextChange?.(t);
        }}
        textBoxRef={textBoxRef}
      />
      <Content data-hasitems={!!filteredItems.length} data-type="content">
        {rowCountOptDisplay === 'top' && outdiff && (
          <RowCount data-top="true">{showText}</RowCount>
        )}
        {filteredItems.map((item, index) =>
          cloneElement(p.renderItem({ searchText, item, index }), {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick: (e: any) => resWrap(item, e.target),
          }),
        )}
        {rowCountOptDisplay === 'bottom' && outdiff && (
          <RowCount data-top="false">{showText}</RowCount>
        )}
      </Content>
    </Base>
  );
};
