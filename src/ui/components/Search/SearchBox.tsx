import { ISearchDialog, TSearchModalRes } from './types';
import { Base } from './Base';
import React from 'react';

export const SearchBox = <T,>(
  p: ISearchDialog<T> & {
    onSelectItem?: ((v: TSearchModalRes<T>) => void) | undefined;
    onSearchTextChange?: (v: string) => void;
  },
) => <Base<T> {...p} />;
