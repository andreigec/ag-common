import { ISearchDialog, TSearchModalRes } from './types';
import { CrossIcon } from '../../icons/CrossIcon';
import { debounce } from '../../helpers';
import { IRefTextEdit, TextEdit } from '../TextEdit';
import { bigScreen, smallScreen } from '../../styles';
import styled from '@emotion/styled';
import React, { createRef, useState } from 'react';
import { Magnify } from '../../icons/Magnify';
import { take } from '../../../common';

const Base = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  width: 100%;
`;

const SearchBox = styled.div`
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

const Content = styled.div`
  width: calc(100% - 2rem);
  margin: auto;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
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
  cursor: pointer;
`;

const CrossIconStyled = styled(CrossIcon)`
  position: absolute;
  right: 1rem;
  @media ${bigScreen} {
    right: 2rem;
  }
`;

export const SearchBase = <T,>({
  onSelectItem,
  onSearchTextChange,
  placeholderText,
  renderItem,
  displayItems,
  willDisplayItem,
  getKeyF,
  className,
  texts,
  maxDisplayItems = 20,
  defaultValue,
}: ISearchDialog<T> & {
  onSearchTextChange?: (v: string) => void;
  onSelectItem?: (v: TSearchModalRes<T>) => void;
}) => {
  const [searchText, setSearchText] = useState(defaultValue ?? '');
  const resWrap = (foundItem: T | undefined) => {
    if (!foundItem) {
      onSelectItem?.(undefined);
    } else {
      onSelectItem?.({ foundItem, searchText });
    }
  };

  const filteredItemsRaw = displayItems.filter((i) =>
    willDisplayItem(searchText, i),
  );

  const { part: filteredItems } = take(filteredItemsRaw, maxDisplayItems);
  const showText =
    texts?.totalItems?.(filteredItems.length, displayItems.length) ??
    `Showing ${filteredItems.length} out of ${displayItems.length} total
  items`;

  const textEditRef = createRef<IRefTextEdit>();

  return (
    <Base className={className}>
      <SearchBox data-type="search">
        <TextEdit
          ref={textEditRef}
          placeholder={placeholderText}
          defaultEditing={{ focus: true }}
          singleLine
          leftContent={<Icon>{Magnify}</Icon>}
          noGrow
          allowUndo={false}
          onEscape={() => resWrap(undefined)}
          onClickOutsideWithNoValue={null}
          onSubmit={(v) =>
            debounce(
              () => {
                setSearchText(v);
                onSearchTextChange?.(v);
              },
              { key: 'pagesearch', time: 200 },
            )
          }
          defaultValue={defaultValue}
        />
        {searchText && (
          <CrossIconStyled
            onClick={() => {
              textEditRef.current?.setValue('');
              setSearchText('');
              onSearchTextChange?.('');
            }}
          />
        )}
      </SearchBox>
      <Content data-hasitems={!!filteredItems.length} data-type="content">
        {filteredItems.map((item, index) => (
          <Row key={getKeyF(item)} onClick={() => resWrap(item)}>
            {renderItem({ searchText, item, index })}
          </Row>
        ))}
        {searchText && <Row>{showText}</Row>}
      </Content>
    </Base>
  );
};
