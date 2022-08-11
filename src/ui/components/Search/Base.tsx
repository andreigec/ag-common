import { ISearchDialog, TSearchModalRes } from './types';
import { CrossIcon } from './images';
import { debounce } from '../../helpers';
import { IRefTextEdit, TextEdit } from '../TextEdit';
import { smallScreen } from '../../styles';
import styled from 'styled-components';
import React, { createRef, useState } from 'react';

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

const MagnifyIconSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">
    <path
      fill="none"
      stroke="#000"
      strokeWidth="36"
      strokeLinecap="round"
      d="M280 278a153 153 0 1 0-2 2l170 170m-91-117 110 110-26 26-110-110"
    />
  </svg>
);

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
}: ISearchDialog<T> & {
  onSearchTextChange?: (v: string) => void;
  onSelectItem?: (v: TSearchModalRes<T>) => void;
}) => {
  const [searchText, setSearchText] = useState('');
  const resWrap = (foundItem: T | undefined) => {
    if (!foundItem) {
      onSelectItem?.(undefined);
    } else {
      onSelectItem?.({ foundItem, searchText });
    }
  };

  const filteredItems = displayItems.filter((i) =>
    willDisplayItem(searchText, i),
  );

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
          leftContent={<Icon>{MagnifyIconSvg}</Icon>}
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
        />
        {searchText && (
          <CrossIconStyled
            onClick={() => {
              textEditRef.current?.setValue('');
              setSearchText('');
            }}
          />
        )}
      </SearchBox>
      <Content data-hasitems={!!filteredItems.length} data-type="content">
        {filteredItems.map((i, index) => (
          <Row key={getKeyF(i)} onClick={() => resWrap(i)}>
            {renderItem(searchText, i, index)}
          </Row>
        ))}
        {searchText && <Row>{showText}</Row>}
      </Content>
    </Base>
  );
};
