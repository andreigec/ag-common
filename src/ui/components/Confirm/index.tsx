/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button } from '../Button';
import { FlexColumn } from '../FlexColumn';
import { FlexRow } from '../FlexRow';
import { Modal } from '../Modal';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import React from 'react';

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

export const ConfirmModal = ({
  onSubmit,
  bottomText,
  topText,
  okText = 'OK',
  cancelText = 'Cancel',
}: {
  onSubmit: (v: boolean) => void;
  topText?: string;
  bottomText: string;
  okText?: string;
  cancelText?: string;
}) => {
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
        <Content>
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

export interface IConfirmAction {
  topText?: string;
  bottomText: string;
}
export const confirm = async ({
  bottomText,
  topText,
}: IConfirmAction): Promise<boolean> => {
  return new Promise((res) => {
    const wrapper = document.body.appendChild(document.createElement('div'));
    const onSubmit = (v: boolean) => {
      try {
        res(v);
      } finally {
        ReactDOM.unmountComponentAtNode(wrapper);
      }
    };

    ReactDOM.render(
      <ConfirmModal
        bottomText={bottomText}
        topText={topText}
        onSubmit={onSubmit}
      />,
      wrapper,
    );
  });
};
