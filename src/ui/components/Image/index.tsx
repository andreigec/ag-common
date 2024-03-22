'use client';
import styled from '@emotion/styled';
import type { ImgHTMLAttributes } from 'react';
import React, { useState } from 'react';

import { bigScreen, smallScreen } from '../../styles/media';

const Base = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;

  min-width: 5rem;
  min-height: 5rem;

  max-width: 100%;
  max-height: 100%;

  &[data-smalltop='true'] {
    @media ${smallScreen} {
      order: -1;
    }
  }
  @media ${smallScreen} {
    max-width: 50vw;
    max-height: 50vh;

    &[data-bigonly='true'] {
      display: none;
    }
    &[data-small='true'] {
      max-width: 25vw;
      max-height: 25vh;
    }
  }

  @media ${bigScreen} {
    max-width: 50vw;
    max-height: 50vh;
    &[data-smallonly='true'] {
      display: none;
    }
    &[data-small='true'] {
      max-width: 30vw;
      max-height: 30vh;
    }
  }
`;

export interface IImage {
  /** if true, will set order to -1 for mobile. default false */
  smalltop?: boolean;
  /** if true, will hide on mobile. default false */
  bigonly?: boolean;
  /** if true, will hide on desktop. default false */
  smallonly?: boolean;
  /** if true is counted as a small image, and will be sized accordingly. default false */
  small?: boolean;
}
export const Image = (p: ImgHTMLAttributes<HTMLImageElement> & IImage) => {
  const { smalltop, bigonly, smallonly, small, ...p1 } = p;
  const [display, setDisplay] = useState(true);
  if (!display) {
    return null;
  }

  return (
    <Base
      {...p1}
      data-smalltop={smalltop}
      data-bigonly={bigonly}
      data-smallonly={smallonly}
      data-small={small}
      onError={() => setDisplay(false)}
    />
  );
};
