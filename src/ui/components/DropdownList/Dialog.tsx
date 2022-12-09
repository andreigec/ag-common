import { DropdownList } from './index';
import React from 'react';
import { IDropdownList } from './types';
import { createRoot } from 'react-dom/client';

export const DropdownListDialog = async <T,>(
  p: { position: { x: number; y: number } } & Omit<
    IDropdownList<T>,
    'onChange'
  >,
): Promise<undefined | [v: T, index: number]> => {
  return new Promise((res) => {
    const id = 'ag-common-ddld';
    if (document.querySelectorAll('#' + id).length) {
      res(undefined);
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
        onChange={(v, i) => {
          root.unmount();
          wrapper.remove();
          res(!v ? undefined : [v, i]);
        }}
      >
        &nbsp;
      </DropdownList>,
    );
  });
};
