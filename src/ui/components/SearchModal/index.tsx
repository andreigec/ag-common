import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { debounce } from '../../helpers/debounce';
import { bigScreen, smallScreen } from '../../styles/media';
import { Modal } from '../Modal';
import { TextEdit } from '../TextEdit/TextEdit';

const ModalStyled = styled(Modal)`
  top: 10rem;
  @media ${bigScreen} {
    width: 50vw;
    max-width: 60rem;
  }
  @media ${smallScreen} {
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
  padding-bottom: 0.5rem;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export interface ISearchDialog<T> {
  placeholderText?: string;
  closeText?: string;
  /**
   * method run to render each filtered item
   */
  renderItem: (searchText: string, item: T) => JSX.Element | string;
  /**
   * all potential items
   */
  displayItems: T[];
  /**
   * run to filter items by search text
   */
  willDisplayItem: (searchText: string, item: T) => boolean;
  /**
   * get unique render key
   */
  getKeyF: (i: T) => string;
}
const SearchModal = <T,>({
  res,
  wrapper,
  placeholderText,
  closeText,
  renderItem,
  displayItems,
  willDisplayItem,
  getKeyF,
}: ISearchDialog<T> & {
  res: (v: T | undefined) => void;
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
  const ret = (v: T | undefined) => {
    try {
      document.body.style.overflow = originalStyle || '';
      res(v);
    } finally {
      wrapper.remove();
    }
  };

  const [searchText, setSearchText] = useState('');
  const filteredItems = displayItems.filter((i) =>
    willDisplayItem(searchText, i),
  );

  return (
    <ModalStyled
      position="center"
      topPosition="center"
      open={true}
      setOpen={() => ret(undefined)}
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
        />
        <CloseButton onClick={() => ret(undefined)}>{closeText}</CloseButton>
      </SearchBox>
      <Content>
        {filteredItems.map((i) => (
          <Row key={getKeyF(i)} onClick={() => ret(i)}>
            {renderItem(searchText, i)}
          </Row>
        ))}
      </Content>
    </ModalStyled>
  );
};

export const searchDialog = async <T,>(
  p: ISearchDialog<T>,
): Promise<T | undefined> => {
  const placeholderText = p.placeholderText || '';
  const closeText = p.closeText || 'CLOSE';

  return new Promise((res) => {
    const wrapper = document.body.appendChild(document.createElement('div'));
    ReactDOM.render(
      <SearchModal
        {...p}
        placeholderText={placeholderText}
        closeText={closeText}
        res={(r) => res(r)}
        wrapper={wrapper}
      />,
      wrapper,
    );
  });
};
