import { useState } from 'react';
export const isServer = typeof window === 'undefined';

export const useQueryString = <T>({
  name,
  searchOverride,
  defaultValue,
  stringify,
  parse,
}: {
  name: string;
  searchOverride?: string;
  defaultValue: T;
  stringify: (v: T) => string | undefined;
  parse: (v: string | undefined) => T | undefined;
}): [T, (v: T) => void] => {
  const raw = isServer ? searchOverride : window.location.search;
  const [state, setStateRaw] = useState<T>(() => {
    if (!raw) {
      return defaultValue;
    }

    const parsed = new URLSearchParams(raw);
    const g = parsed.get(name);
    if (!g) {
      return defaultValue;
    }
    return parse(g) || defaultValue;
  });

  const setState = (v: T) => {
    const searchParams = new URLSearchParams(window.location.search);
    const sv = stringify(v);
    if (sv) {
      searchParams.set(name, sv);
    } else {
      searchParams.delete(name);
    }

    let qs = '';
    if (Array.from(searchParams).length !== 0) {
      qs = '?' + searchParams.toString();
    }

    const loc = `${location.pathname}${qs}${window.location.hash}`;
    window.history.replaceState({}, '', loc);
    setStateRaw(v);
  };

  return [state, setState];
};
