import { Highlight, Highlight2 } from './common';
import { ICodeBlock, IOpenApiOperation } from '../types';
import { toTitleCase } from '../../../../common/helpers/string';
import React from 'react';

export const getSecurityLine = <TDefaultApi,>(
  p: ICodeBlock<TDefaultApi>,
  { operation }: { operation: IOpenApiOperation },
): { error?: string; content: JSX.Element } => {
  const security1 = operation.security?.[0];
  const security2 = !security1 ? undefined : Object.keys(security1)[0];
  const security = !security2
    ? undefined
    : p.schema.components.securitySchemes[security2];

  if (security) {
    if (security.in !== 'header') {
      return { error: 'not supported sec in', content: <></> };
    }

    return {
      content: (
        <>
          <span>--header </span>
          <Highlight>
            &apos;{toTitleCase(security.name)}:{' '}
            <Highlight2>{p.apiKey || '(API KEY)'}</Highlight2>&apos;
          </Highlight>
        </>
      ),
    };
  }
  return { content: <></> };
};
