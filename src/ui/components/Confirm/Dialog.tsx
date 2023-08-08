import React from 'react';
import { createRoot } from 'react-dom/client';

import { error } from '../../../common/helpers/log';
import { ConfirmModal } from './Modal';
import type { IConfirmDialog } from './types';
/**
 * opens a dialog programatically
 * @param param0
 * @returns
 */
export const ConfirmDialog = async ({
  bottomText,
  topText,
}: IConfirmDialog): Promise<boolean> => {
  return new Promise((res) => {
    const idName = 'ag-confirm-dialog';
    if (document.body.querySelectorAll('#' + idName).length !== 0) {
      error('confirmDialog already open');
      res(false);
      return;
    }

    const wrapper = document.body.appendChild(document.createElement('div'));
    wrapper.id = idName;
    const root = createRoot(wrapper);
    const onSubmit = (v: boolean) => {
      try {
        res(v);
      } finally {
        root.unmount();
        wrapper.remove();
      }
    };

    root.render(
      <ConfirmModal
        bottomText={bottomText}
        topText={topText}
        onSubmit={onSubmit}
      />,
    );
  });
};
