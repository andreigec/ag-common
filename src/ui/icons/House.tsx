import type { CSSProperties } from 'react';
import React from 'react';

export const House = ({
  style,
}: {
  style?: {
    /** change the colour of the icon. default black */
    fill?: string;
  } & CSSProperties;
}) => (
  <svg fill="none" viewBox="5 5 35 35" style={style}>
    <path d="m24.155 8.781.175.164 13.072 12.842L36 23.213l-1.8-1.768L34.201 35a2 2 0 0 1-1.851 1.994l-.149.006h-20a2.001 2.001 0 0 1-1.995-1.851L10.201 35 10.2 21.446l-1.798 1.767L7 21.787 20.058 8.958a3 3 0 0 1 4.097-.177Zm-2.586 1.504-.096.087-9.273 9.109L12.201 35l4.999-.001.001-9.999c0-1.054.816-1.918 1.851-1.995l.149-.005h6c1.054 0 1.918.816 1.995 1.851l.005.149-.001 9.999 5.001.001-.001-15.52-9.299-9.136a1.001 1.001 0 0 0-1.332-.059ZM25.201 25h-6l-.001 9.999h6L25.201 25Z" />
  </svg>
);
