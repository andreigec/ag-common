import React from 'react';

//red cross in circle
export const Cross = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <defs>
      <linearGradient
        id="a"
        x2="0"
        y1="47.37"
        y2="-1.429"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#c52828" />
        <stop offset="1" stopColor="#ff5454" />
      </linearGradient>
    </defs>
    <g
      style={{ fillOpacity: 1 }}
      transform="translate(-58.37 .882) scale(.99999)"
    >
      <circle
        cx="82.37"
        cy="23.12"
        r="24"
        fill="url(#a)"
        style={{ fillOpacity: 1, fill: '#d33' }}
      />
      <path
        fill="#fff"
        fillOpacity=".842"
        d="m87.77 23.725 5.939-5.939c.377-.372.566-.835.566-1.373 0-.54-.189-.997-.566-1.374l-2.747-2.747a1.888 1.888 0 0 0-1.373-.564c-.539 0-.997.186-1.374.564l-5.939 5.939-5.939-5.939a1.889 1.889 0 0 0-1.374-.564c-.539 0-.997.186-1.374.564l-2.748 2.747a1.873 1.873 0 0 0-.566 1.374c0 .54.188.997.566 1.373l5.939 5.939-5.939 5.94a1.862 1.862 0 0 0-.566 1.373c0 .54.188.997.566 1.373l2.748 2.747c.377.378.835.564 1.374.564.539 0 .997-.186 1.374-.564l5.939-5.939 5.94 5.939c.377.378.835.564 1.374.564.539 0 .997-.186 1.373-.564l2.747-2.747c.377-.372.566-.835.566-1.373 0-.54-.188-.997-.566-1.373l-5.939-5.94"
        style={{ fillOpacity: 1, fill: '#fff' }}
      />
    </g>
  </svg>
);
