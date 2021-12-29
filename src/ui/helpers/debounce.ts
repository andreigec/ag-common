/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return debouncedValue;
}

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const debounceMap: Record<string, number> = {};
export function debounce(
  callback: () => void,
  {
    key,
    time,
  }: {
    time: number;
    key: string;
  },
) {
  const now = new Date().getTime();
  const lastDrag = debounceMap[key] || 0;
  if (now - lastDrag < time) {
    return;
  }

  debounceMap[key] = now;
  callback();
}
