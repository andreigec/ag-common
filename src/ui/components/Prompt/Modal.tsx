'use client';
import styled from '@emotion/styled';
import React, { useState } from 'react';

import { Button } from '../Button';
import { FlexColumn } from '../FlexColumn';
import { FlexRow } from '../FlexRow';
import { Modal } from '../Modal/Modal';
import { TextEdit } from '../TextEdit';
import type { IPromptModal } from './types';

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
export const PromptModal = ({
  root,
  wrapper,
  res,
  bottomText,
  topText,
  okText = 'OK',
  cancelText = 'Cancel',
  defaultValue,
  placeholder,
  style,
}: IPromptModal) => {
  const [text, setText] = useState(defaultValue || '');
  const ret = (v: string | undefined) => {
    try {
      res(v);
    } finally {
      root?.unmount();
      wrapper?.remove();
    }
  };

  return (
    <Modal
      position="center"
      topPosition="center"
      open={true}
      setOpen={() => ret(undefined)}
      showCloseButton={false}
      closeOnClickOutside={false}
    >
      <Base>
        <Content style={style}>
          {topText && <TopText>{topText}</TopText>}
          <BottomText>{bottomText}</BottomText>
          <TextEdit
            defaultValue={text}
            onSubmit={(c, enter) => {
              if (enter) {
                ret(c);
              } else {
                setText(c);
              }
            }}
            placeholder={placeholder}
            defaultEditing={{ focus: true }}
            singleLine
            noGrow
            allowUndo={false}
          />
          <Bottom noGrow>
            <Button onClick={() => ret(text)}>{okText}</Button>
            <Button invert onClick={() => ret(undefined)}>
              {cancelText}
            </Button>
          </Bottom>
        </Content>
      </Base>
    </Modal>
  );
};
