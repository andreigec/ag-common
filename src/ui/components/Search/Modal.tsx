import { ISearchDialog, TSearchModalRes } from './types';
import { SearchBase } from './Base';
import { bigScreen, smallScreen } from '../../styles';
import { Modal } from '../Modal/Modal';
import styled from 'styled-components';
import React from 'react';

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

export const SearchModal = <T,>(
  p: ISearchDialog<T> & {
    onSelectItem: (v: TSearchModalRes<T>) => void;
  },
) => (
  <ModalStyled
    position="center"
    topPosition="center"
    open={true}
    setOpen={() => p.onSelectItem(undefined)}
    showCloseButton={false}
    closeOnClickOutside={true}
  >
    <SearchBase<T> {...p} />
  </ModalStyled>
);
