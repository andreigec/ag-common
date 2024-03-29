'use client';
import styled from '@emotion/styled';
import React from 'react';

import { Button } from '../Button';
import { FlexColumn } from '../FlexColumn';
import { FlexRow } from '../FlexRow';
import { Modal } from '../Modal/Modal';
import type { IConfirmModal } from './types';

const Base = styled.div`
  width: 95vw;
  max-width: 30rem;
  height: 50vh;
  max-height: 15rem;
`;

const Content = styled(FlexColumn)`
  padding: 1rem;
  height: calc(100% - 2rem);
  width: calc(100% - 2rem);
`;

const TopText = styled.div`
  font-weight: bold;
  border-bottom: solid 1px #ccc;
  padding-bottom: 0.25rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const BottomText = styled.div`
  padding-bottom: 0.25rem;
  font-size: 1.1rem;
`;

const Bottom = styled(FlexRow)`
  margin-top: auto;
  justify-content: flex-end;
  > button:first-of-type {
    margin-right: 1rem;
  }
`;

export const ConfirmModal = ({
  onSubmit,
  bottomText,
  topText,
  okText = 'OK',
  cancelText = 'Cancel',
  style,
}: IConfirmModal) => {
  return (
    <Modal
      position="center"
      topPosition="center"
      open={true}
      setOpen={() => onSubmit(false)}
      showCloseButton={false}
      closeOnClickOutside={false}
    >
      <Base>
        <Content style={style}>
          {topText && <TopText>{topText}</TopText>}
          <BottomText>{bottomText}</BottomText>
          <Bottom noGrow>
            <Button onClick={() => onSubmit(true)}>{okText}</Button>
            <Button invert onClick={() => onSubmit(false)}>
              {cancelText}
            </Button>
          </Bottom>
        </Content>
      </Base>
    </Modal>
  );
};
