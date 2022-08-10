import { Modal } from './Modal';
import React from 'react';
import ReactDOM from 'react-dom';

export const ModalDialog = async (
  content: JSX.Element,
): Promise<string | undefined> => {
  return new Promise((res) => {
    const wrapper = document.body.appendChild(document.createElement('div'));
    ReactDOM.render(
      <Modal
        open={true}
        setOpen={(o) => {
          if (!o) {
            ReactDOM.unmountComponentAtNode(wrapper);
            wrapper.remove();
          }

          res('ok');
        }}
        topPosition="center"
        position="center"
      >
        {content}
      </Modal>,
      wrapper,
    );
  });
};
