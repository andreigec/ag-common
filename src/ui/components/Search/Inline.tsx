import { ISearchDialog, TSearchModalRes } from './types';
import { SearchBase } from './Base';
import React from 'react';

export const SearchInline = <T,>(
  p: ISearchDialog<T> & {
    onSelectItem?: ((v: TSearchModalRes<T>) => void) | undefined;
    onSearchTextChange?: (v: string) => void;
  },
) => <SearchBase<T> {...p} />;
