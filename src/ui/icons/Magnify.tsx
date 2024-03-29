import type { CSSProperties } from 'react';
import React from 'react';

export const Magnify = ({
  style,
}: {
  style?: {
    /** change the colour of the icon. default black */
    fill?: string;
  } & CSSProperties;
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490" style={style}>
    <path
      fill="none"
      stroke={style?.fill ?? 'black'}
      strokeWidth="36"
      strokeLinecap="round"
      d="M280 278a153 153 0 1 0-2 2l170 170m-91-117 110 110-26 26-110-110"
    />
  </svg>
);
