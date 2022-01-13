import { useState } from 'react';
export const isServer = typeof window === 'undefined';

export const useQueryStringRaw = <T>({
  name,
  searchOverride,
  defaultValue,
  stringify,
  parse,
}: {
  name: string;
  searchOverride?: string;
  defaultValue: T | undefined;
  stringify: (v: T) => string | undefined;
  parse: (v: string | undefined) => T | undefined;
}) => {
  const raw = isServer ? searchOverride : window.location.search;
  const [state, setStateRaw] = useState<T | undefined>(() => {
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
export const useQueryStringArray = ({
  name,
  searchOverride,
  defaultValue,
}: {
  name: string;
  searchOverride?: string;
  defaultValue: string[];
}) =>
  useQueryStringRaw<string[]>({
    name,
    defaultValue,
    searchOverride,
    stringify: (v) => (v.length === 0 ? undefined : v.join(',')),
    parse: (v) => (!v ? defaultValue : v.split(',')),
  });

export const useQueryStringSingle = ({
  name,
  searchOverride,
  defaultValue,
}: {
  name: string;
  searchOverride?: string;
  defaultValue: string | undefined;
}) =>
  useQueryStringRaw<string>({
    name,
    defaultValue,
    searchOverride,
    stringify: (v) => v,
    parse: (v) => (!v ? defaultValue : v),
  });
