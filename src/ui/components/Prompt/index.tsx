/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Button } from '../Button';
import { FlexColumn } from '../FlexColumn';
import { FlexRow } from '../FlexRow';
import { Modal } from '../Modal';
import { TextInput } from '../TextInput';

const Base = styled.div`
  width: 95vw;
  max-width: 30rem;
  height: 50vh;
  max-height: 15rem;
  padding: 1rem;
`;

const Content = styled(FlexColumn)`
  height: 100%;
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
  > button:first-child {
    margin-right: 1rem;
  }
`;

const PromptModal = ({
  wrapper,
  res,
  bottomText,
  topText,
  okText = 'OK',
  cancelText = 'Cancel',
  defaultValue,
  placeholder,
}: {
  defaultValue?: string;
  placeholder?: string;
  res: (v: string | undefined) => void;
  wrapper: HTMLDivElement;
  topText?: string;
  bottomText: string;
  okText?: string;
  cancelText?: string;
}) => {
  const [text, setText] = useState(defaultValue || '');
  const ret = (v: string | undefined) => {
    try {
      res(v);
    } finally {
      wrapper.remove();
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
        <Content>
          {topText && <TopText>{topText}</TopText>}
          <BottomText>{bottomText}</BottomText>
          <TextInput
            value={text}
            onChange={(c) => setText(c)}
            placeholder={placeholder}
            focus
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

export const prompt = async (p: {
  topText?: string;
  bottomText: string;
  defaultValue?: string;
  placeholder?: string;
}): Promise<string | undefined> => {
  return new Promise((res) => {
    const wrapper = document.body.appendChild(document.createElement('div'));
    ReactDOM.render(
      <PromptModal {...p} res={res} wrapper={wrapper} />,
      wrapper,
    );
  });
};
