import React from 'react';

import { getBodyJson, Highlight, Highlight2 } from '../../helpers/common';
import { IOpenApiCodeBlock } from '../../types';

export const getBody = <TDefaultApi,>(
  p: IOpenApiCodeBlock<TDefaultApi>,
): { content: JSX.Element | undefined; header: JSX.Element | undefined } => {
  const { nice } = getBodyJson(p) || {};
  if (!nice) {
    return { content: undefined, header: undefined };
  }

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
