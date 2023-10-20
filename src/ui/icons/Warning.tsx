import React from 'react';

//yellow warning
export const Warning = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className={className}
  >
    <defs>
      <linearGradient
        id="a"
        x2="0"
        y1="45.47"
        y2="-.599"
        gradientTransform="matrix(1.31117 0 0 1.30239 737.39 159.91)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ffc515" />
        <stop offset="1" stopColor="#ffd55b" />
      </linearGradient>
    </defs>
    <path
      fill="none"
      stroke="url(#a)"
      strokeWidth="4px"
      d="m797.94 212.01-25.607-48c-.736-1.333-2.068-2.074-3.551-2.074s-2.822.889-3.569 2.222l-25.417 48c-.598 1.185-.605 2.815.132 4s1.921 1.778 3.404 1.778h51.02c1.483 0 2.821-.741 3.42-1.926.747-1.185.753-2.667.165-4"
      transform="translate(-627.02 -130.8) scale(.85714)"
    />
    <path
      fillOpacity=".75"
      stroke="#40330d"
      strokeWidth=".90168"
      d="M31.996 24.239a1.93 1.93 0 0 0-1.926 1.92v11.559c0 1.06.855 1.92 1.926 1.92a1.929 1.929 0 0 0 1.925-1.92v-11.56c0-1.06-.853-1.92-1.925-1.92zm0 19.249c-1.064 0-1.926.86-1.926 1.925 0 1.064.86 1.925 1.926 1.925 1.064 0 1.925-.86 1.925-1.925a1.922 1.922 0 0 0-1.925-1.925z"
    />
  </svg>
);
