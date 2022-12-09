import { useEffect, useState } from 'react';

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

const hashMap: { [key: string]: NodeJS.Timeout } = {};
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
  clearTimeout(hashMap[key]);
  hashMap[key] = setTimeout(() => {
    delete hashMap[key];
    callback();
  }, time);
}
