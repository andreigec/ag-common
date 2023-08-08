import React from 'react';

import { getSecurity, Highlight, Highlight2 } from '../../helpers/common';
import type { IOpenApi, IOpenApiOperation } from '../../types';

export const getSecurityLine = (
  p: { apiKey?: string; schema: IOpenApi },
  { operation }: { operation: IOpenApiOperation },
): { error?: string; content: JSX.Element | undefined } => {
  const sec = getSecurity(p, { operation });
  if (sec === null) {
    return { error: 'not supported sec in', content: undefined };
  }

  if (!sec) {
    return { content: undefined };
  }

  return {
    content: (
      <>
        <span>--header </span>
        <Highlight>
          &apos;{sec.name}: <Highlight2>{p.apiKey || '(API KEY)'}</Highlight2>
          &apos;
        </Highlight>
      </>
    ),
  };
};
