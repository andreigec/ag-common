import { ISearchDialog, TSearchModalRes } from './types';
import { SearchModal } from './Modal';
import { error } from '../../../common';
import React from 'react';
import { createRoot } from 'react-dom/client';
/**
 * opens a searchmodal programatically, and resolves to either undefined, or the selected item
 * @param p
 * @returns
 */
export const SearchDialog = async <T,>(
  p: ISearchDialog<T>,
): Promise<TSearchModalRes<T>> => {
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
        onSelectItem={(f: TSearchModalRes<T>) => {
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
