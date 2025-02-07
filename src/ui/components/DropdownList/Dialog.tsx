import React from 'react';
import { createRoot } from 'react-dom/client';

import { DropdownList } from './index';
import type { IDropdownList } from './types';

export const DropdownListDialog = async <T,>(
  p: { position: { x: number; y: number } } & Omit<
    IDropdownList<T>,
    'onChange'
  >,
): Promise<undefined | [v: T, index: number]> => {
  return new Promise((res) => {
    const id = 'ag-common-ddld';
    //already open
    if (document.querySelectorAll('#' + id).length) {
      return;
    }

    const wrapper = document.body.appendChild(document.createElement('div'));
    wrapper.id = id;
    wrapper.style.position = 'absolute';
    wrapper.style.top = `${p.position.y}px`;
    wrapper.style.left = `${p.position.x}px`;
    const root = createRoot(wrapper);
    root.render(
      <DropdownList
        {...p}
        open
        onClose={() => {
          try {
            root.unmount();
            wrapper.remove();
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (e) {
            //
          }
        }}
        onChange={(v, i) => {
          try {
            root.unmount();
            wrapper.remove();
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (e) {
            //
          }
          res(!v ? undefined : [v, i]);
        }}
      >
        &nbsp;
      </DropdownList>,
    );
  });
};
