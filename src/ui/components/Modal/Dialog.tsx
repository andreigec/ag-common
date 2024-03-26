import type { CSSProperties } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { Modal } from './Modal';

export const ModalDialog = async (
  content: JSX.Element,
  opt?: { style?: CSSProperties },
): Promise<string | undefined> => {
  return new Promise((res) => {
    const wrapper = document.body.appendChild(document.createElement('div'));
    const root = createRoot(wrapper);
    root.render(
      <Modal
        open={true}
        setOpen={(o) => {
          if (!o) {
            try {
              root.unmount();
              wrapper.remove();
            } catch (e) {
              //
            }
          }

          res('ok');
        }}
        topPosition="center"
        position="center"
        style={opt?.style}
      >
        {content}
      </Modal>,
    );
  });
};
