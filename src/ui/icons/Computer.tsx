import type { CSSProperties } from 'react';
import React from 'react';

export const Computer = ({
  style,
}: {
  style?: {
    /** change the colour of the icon. default black */
    fill?: string;
  } & CSSProperties;
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={style}>
    <path
      fillRule="evenodd"
      d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-6v1h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1H5a3 3 0 0 1-3-3V6Zm3-1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5Z"
      clipRule="evenodd"
    />
  </svg>
);
