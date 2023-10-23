'use client';
import styled from '@emotion/styled';
import React, { cloneElement, useState } from 'react';

import { take } from '../../../common/helpers/array';
import { smallScreen } from '../../styles';
import { SearchBox } from './SearchBox';
import type { ISearchDialog, TSearchModalRes } from './types';

const Base = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  width: 100%;
`;

const Content = styled.div`
  width: calc(100% - 2rem);
  margin: auto;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  max-height: calc(100vh - 20rem);
  overflow-y: auto;
  overflow-x: hidden;

  flex-grow: 1;
  &[data-hasitems='true'] {
    padding-bottom: 0.5rem;
  }
  @media ${smallScreen} {
    margin: 0;
    width: 100%;
    margin-top: 1rem;
  }
`;

const Row = styled.div`
  width: 100%;
`;

type ISearchBase<T> = ISearchDialog<T> & {
  onSearchTextChange?: (v: string) => void;
  onSelectItem?: (v: TSearchModalRes<T>) => void;
};
export const SearchBase = <T,>(p: ISearchBase<T>) => {
  const { maxDisplayItems = 1000 } = p;
  const [searchText, setSearchText] = useState(p.defaultValue ?? '');
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
      />
      <Content data-hasitems={!!filteredItems.length} data-type="content">
        {filteredItems.map((item, index) =>
          cloneElement(p.renderItem({ searchText, item, index }), {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick: (e: any) => resWrap(item, e.target),
          }),
        )}
        {outdiff && <Row>{showText}</Row>}
      </Content>
    </Base>
  );
};
