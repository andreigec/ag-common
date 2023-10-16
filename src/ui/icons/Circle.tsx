import type { CSSProperties } from 'react';
import React from 'react';

export const Circle = ({
  style,
  dotted = false,
}: {
  style?: {
    /** change the colour of the circle. default black */
    fill?: string;
  } & CSSProperties;
  dotted?: boolean;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="2 2 20 20"
    style={{ ...style, fill: undefined }}
  >
    <path
      stroke={style?.fill ?? '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={!dotted ? '' : '4 4'}
      strokeWidth="2"
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
