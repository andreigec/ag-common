import { ISearchDialog, TSearchModalRes } from './types';
import { SearchModal } from './SearchModal';
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

  return new Promise((res) => {
    const wrapper = document.body.appendChild(document.createElement('div'));
    ReactDOM.render(
      <SearchModal
        {...p}
        placeholderText={placeholderText}
        closeText={closeText}
        res={(r) => res(r)}
        wrapper={wrapper}
      />,
      wrapper,
    );
  });
};
