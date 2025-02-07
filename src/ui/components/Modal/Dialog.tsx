import type { CSSProperties } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { Modal } from './Modal';

export const ModalDialog = async (
  content: React.ReactNode | ((p: { close: () => void }) => React.ReactNode),
  opt?: { style?: CSSProperties; portalId?: string },
): Promise<string | undefined> => {
  return new Promise((res) => {
    const wrapper = document.body.appendChild(document.createElement('div'));
    const root = createRoot(wrapper);
    const onClose = () => {
      try {
        root.unmount();
        wrapper.remove();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        //
      }
    };
    root.render(
      <Modal
        open={true}
        setOpen={(o) => {
          if (!o) {
            onClose();
          }

          res('ok');
        }}
        topPosition="center"
        position="center"
        style={opt?.style}
      >
        {typeof content !== 'function'
          ? content
          : content({
              close: () => {
                onClose();
              },
            })}
      </Modal>,
    );
  });
};
