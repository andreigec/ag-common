import type { JSX } from 'react';
import React from 'react';

import { notEmpty } from '../../../../common/helpers/array';

export const joinJsx = (
  items: (JSX.Element | undefined)[],
  sep: JSX.Element[],
) => {
  const ret: JSX.Element[] = [];
  items.filter(notEmpty).forEach((i, index) => {
    ret.push(i);
    if (index !== items.length - 1) {
      for (const s of sep) {
        ret.push(s);
      }
    }
  });

  return ret;
};
export const joinJsxWithSlash = (items: (JSX.Element | undefined)[]) =>
  joinJsx(items, [<>&nbsp;\</>, <br key="br1" />]);
export const joinJsxWithComma = (items: (JSX.Element | undefined)[]) =>
  joinJsx(items, [<>,</>, <br key="br1" />]);
