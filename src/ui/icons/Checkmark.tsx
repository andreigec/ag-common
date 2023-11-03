import type { CSSProperties } from 'react';
import React from 'react';

export const Checkmark = ({
  style,
}: {
  style?: {
    /** change the colour of the tick. default black */
    fill?: string;
  } & CSSProperties;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="2 2 20 20"
    style={{ ...style }}
  >
    <path
      fill="none"
      stroke={style?.fill ?? '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 12.333 10.461 15 16 9m5 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
