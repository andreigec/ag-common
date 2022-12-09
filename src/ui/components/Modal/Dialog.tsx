import { Modal } from './Modal';
import React from 'react';
import { createRoot } from 'react-dom/client';

export const ModalDialog = async (
  content: JSX.Element,
): Promise<string | undefined> => {
  return new Promise((res) => {
    const wrapper = document.body.appendChild(document.createElement('div'));
    const root = createRoot(wrapper);
    root.render(
      <Modal
        open={true}
        setOpen={(o) => {
          if (!o) {
            root.unmount();
            wrapper.remove();
          }

          res('ok');
        }}
        topPosition="center"
        position="center"
      >
        {content}
      </Modal>,
    );
  });
};
