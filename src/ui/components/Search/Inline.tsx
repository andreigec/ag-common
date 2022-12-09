import React from 'react';

import { SearchBase } from './Base';
import { ISearchInline, TSearchModalRes } from './types';

export const SearchInline = <T,>(
  p: ISearchInline<T> & {
    onSelectItem?: ((v: TSearchModalRes<T>) => void) | undefined;
    onSearchTextChange?: (v: string) => void;
  },
) => <SearchBase<T> {...p} />;
