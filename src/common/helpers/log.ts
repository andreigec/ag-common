/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
export const info = (...args: any[]) => {
  console.log(...args);
};

export const warn = (...args: any[]) => {
  console.warn(...args);
};

export const error = (...args: any[]) => {
  console.error(...args);
};

export const debug = (...args: any[]) => {
  console.debug(...args);
};

export const trace = (...args: any[]) => {
  console.trace(...args);
};
