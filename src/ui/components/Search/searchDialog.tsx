import { ISearchDialog, TSearchModalRes } from './types';
import { SearchModal } from './SearchModal';
import { error } from '../../../common';
import React from 'react';
import ReactDOM from 'react-dom';
/**
 * opens a searchmodal programatically, and resolves to either undefined, or the selected item
 * @param p
 * @returns
 */
export const searchDialog = async <T,>(
  p: ISearchDialog<T>,
): Promise<TSearchModalRes<T>> => {
  const placeholderText = p.placeholderText || '';
  const closeText = p.closeText || 'CLOSE';
  let originalStyle: string | undefined;

  return new Promise((res) => {
    if (document.querySelectorAll('#ag-search-dialog').length !== 0) {
      error('searchDialog already open');
      res(undefined);
      return;
    }

    const wrapper: HTMLDivElement = document.body.appendChild(
      document.createElement('div'),
    );

    wrapper.id = 'ag-search-dialog';
    if (originalStyle === undefined) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      originalStyle = window.getComputedStyle(document.body).overflow || '';
      document.body.style.overflow = 'hidden';
    }

    const onSelectItem = (f: TSearchModalRes<T>) => {
      try {
        document.body.style.overflow = originalStyle || '';
        res(f);
      } finally {
        ReactDOM.unmountComponentAtNode(wrapper);
      }
    };

    ReactDOM.render(
      <SearchModal
        {...p}
        placeholderText={placeholderText}
        closeText={closeText}
        onSelectItem={onSelectItem}
      />,
      wrapper,
    );
  });
};
