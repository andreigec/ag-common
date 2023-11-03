import React from 'react';
import { createRoot } from 'react-dom/client';

import { error } from '../../../common/helpers/log';
import { SearchModal } from './Modal';
import type { ISearchDialog, TSearchModalRes } from './types';
/**
 * opens a searchmodal programatically, and resolves to either undefined, or the selected item
 * @param p
 * @returns
 */
export const SearchDialog = async <T,>(
  p: ISearchDialog<T>,
): Promise<TSearchModalRes<T> | undefined> => {
  const placeholderText = p.placeholderText || '';
  let originalStyle: string | undefined;

  return new Promise((res) => {
    const idName = 'ag-search-dialog';
    if (document.body.querySelectorAll('#' + idName).length !== 0) {
      error('searchDialog already open');
      res(undefined);
      return;
    }

    const wrapper: HTMLDivElement = document.body.appendChild(
      document.createElement('div'),
    );

    wrapper.id = idName;
    if (originalStyle === undefined) {
      originalStyle = window.getComputedStyle(document.body).overflow || '';
      document.body.style.overflow = 'hidden';
    }

    const root = createRoot(wrapper);
    root.render(
      <SearchModal
        {...p}
        placeholderText={placeholderText}
        onSelectItem={(f: TSearchModalRes<T> | undefined) => {
          try {
            document.body.style.overflow = originalStyle || '';
            res(f);
          } finally {
            root.unmount();
            wrapper.remove();
          }
        }}
      />,
    );
  });
};
