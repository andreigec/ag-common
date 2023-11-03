'use client';
import styled from '@emotion/styled';
import React from 'react';

import { bigScreen, smallScreen } from '../../styles';
import { Modal } from '../Modal/Modal';
import { SearchBase } from './Base';
import type { ISearchModal } from './types';

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

export const SearchModal = <T,>(p: ISearchModal<T>) => (
  <ModalStyled
    position="center"
    topPosition="center"
    open={true}
    setOpen={() => p?.onSelectItem?.(undefined)}
    showCloseButton={false}
    closeOnClickOutside={true}
  >
    <SearchBase<T> {...p} />
  </ModalStyled>
);
