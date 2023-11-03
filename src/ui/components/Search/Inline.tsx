import React from 'react';

import { SearchBase } from './Base';
import type { ISearchInline } from './types';

export const SearchInline = <T,>(p: ISearchInline<T>) => (
  <SearchBase<T> {...p} />
);
