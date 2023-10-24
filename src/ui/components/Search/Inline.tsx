import type { Ref } from 'react';
import React from 'react';

import type { IRefTextEdit } from '../TextEdit/types';
import { SearchBase } from './Base';
import type { ISearchInline, TSearchModalRes } from './types';

export const SearchInline = <T,>(
  p: ISearchInline<T> & {
    onSelectItem?: ((v: TSearchModalRes<T>) => void) | undefined;
    onSearchTextChange?: (v: string) => void;
    textBoxRef?: Ref<IRefTextEdit>;
  },
) => <SearchBase<T> {...p} />;
