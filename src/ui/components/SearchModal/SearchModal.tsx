import { ISearchDialog, TSearchModalRes } from './types';
import { debounce } from '../../helpers/debounce';
import { bigScreen, smallScreen } from '../../styles/media';
import { Modal } from '../Modal';
import { TextEdit } from '../TextEdit/TextEdit';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

const ModalStyled = styled(Modal)`
  display: flex;
  flex-flow: column;
  top: 10rem;
  @media ${bigScreen} {
    width: 50vw;
    max-width: 60rem;
  }
  @media ${smallScreen} {
    width: 100%;
    max-width: 95vw;
  }
`;

const SearchBox = styled.div`
  padding: 1rem;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
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

const CloseButton = styled.div`
  font-weight: bold;
  margin-left: 1rem;
  font-size: 1.1rem;
  z-index: 1;
  color: #333;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  max-height: calc(100vh - 20rem);
  overflow-y: auto;
  &[data-hasitems='true'] {
    padding-bottom: 0.5rem;
  }
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const SearchModal = <T,>({
  res,
  wrapper,
  placeholderText,
  closeText,
  renderItem,
  displayItems,
  willDisplayItem,
  getKeyF,
}: ISearchDialog<T> & {
  res: (v: TSearchModalRes<T>) => void;
  wrapper: HTMLDivElement;
}) => {
  let originalStyle: string | undefined;
  useEffect(() => {
    if (originalStyle === undefined) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      originalStyle = window.getComputedStyle(document.body).overflow || '';
      document.body.style.overflow = 'hidden';
    }
  }, []);
  const [searchText, setSearchText] = useState('');
  const resWrap = (foundItem: T | undefined) => {
    try {
      document.body.style.overflow = originalStyle || '';
      if (!foundItem) {
        res(undefined);
      } else {
        res({ foundItem, searchText });
      }
    } finally {
      wrapper.remove();
    }
  };

  const filteredItems = displayItems.filter((i) =>
    willDisplayItem(searchText, i),
  );

  return (
    <ModalStyled
      position="center"
      topPosition="center"
      open={true}
      setOpen={() => resWrap(undefined)}
      showCloseButton={false}
      closeOnClickOutside={true}
    >
      <SearchBox>
        <TextEdit
          placeholder={placeholderText}
          defaultValue=""
          onSubmit={(v) =>
            debounce(
              () => {
                setSearchText(v);
              },
              { key: 'pagesearch', time: 200 },
            )
          }
          defaultEditing={{ focus: true }}
          singleLine
          leftContent={<Icon>{MagnifyIconSvg}</Icon>}
          noGrow
          allowUndo={false}
          onEscape={() => resWrap(undefined)}
        />
        <CloseButton onClick={() => resWrap(undefined)}>
          {closeText}
        </CloseButton>
      </SearchBox>
      <Content data-hasitems={!!filteredItems.length}>
        {filteredItems.map((i) => (
          <Row key={getKeyF(i)} onClick={() => resWrap(i)}>
            {renderItem(searchText, i)}
          </Row>
        ))}
      </Content>
    </ModalStyled>
  );
};