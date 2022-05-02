import { Highlight, Highlight2 } from './common';
import { indexOfNumber } from '../../../../common';
import { ICodeBlock } from '../types';
import React from 'react';

export const getBody = <TDefaultApi,>(
  p: ICodeBlock<TDefaultApi>,
): { content: JSX.Element | undefined; header: JSX.Element | undefined } => {
  const body = p.funcF.toString();
  const bstart = indexOfNumber(body, '(', 1);
  const bend = !bstart ? undefined : body.lastIndexOf(')');
  if (!bstart || !bend) {
    return { content: undefined, header: undefined };
  }

  const slice = body.substring(bstart + 1, bend);
  const json = slice.replace(/([a-zA-Z0-9-]+[^"]):/gim, '"$1":');
  const nice = JSON.stringify(JSON.parse(json), null, 2);
  const content = (
    <>
      -d @- &lt;&lt;&apos;EOF&apos;
      <br />
      <Highlight2>{nice}</Highlight2>
      <br />
      EOF
    </>
  );

  const header = (
    <>
      <span>--header </span>
      <Highlight>
        <Highlight>&apos;Content-Type: application/json&apos;</Highlight>
      </Highlight>
    </>
  );

  return {
    content,
    header,
  };
};
