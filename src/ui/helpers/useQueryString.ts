import { useEffect, useState } from 'react';

import { info } from '../../common';
import { objectToString, paramsToObject } from '../../common/helpers/object';

export const isServer = typeof window === 'undefined';

/**
 * hook for query string value
 * @param param0 can provide for SSR - queryValues will default to window if available
 * @returns
 */
export const useQueryStringRaw = <T>({
  name,
  queryValues,
  defaultValue,
  stringify,
  parse,
}: {
  name: string;
  queryValues?: Record<string, string>;
  defaultValue: T;
  stringify: (v: T) => string | undefined;
  parse: (v: string | undefined) => T;
}): [T, (v: T) => void] => {
  const qv: Record<string, string> = isServer
    ? queryValues || {}
    : paramsToObject(new URLSearchParams(window.location.search));

  const qsv = parse(qv[name]) || defaultValue;
  const [state, setStateRaw] = useState<T>(qsv);
  //
  const setState = (v: T) => {
    const sv = !v ? undefined : stringify(v);
    if (sv) {
      qv[name] = sv;
    } else {
      delete qv[name];
    }

    const qs = '?' + objectToString(qv, '=', '&');
    if (!isServer) {
      const loc = window.location.pathname + qs + window.location.hash;
      window.history.replaceState({}, '', loc);
    } else {
      info('cant change url params on server');
    }

    setStateRaw(v);
  };
  //

  useEffect(() => {
    if (JSON.stringify(state) !== JSON.stringify(qsv)) {
      setStateRaw(qsv);
    }
  }, [name, parse, qsv, state]);

  return [state, setState];
};

/**
 * hook for query string value - string array type
 * @param param0 can provide for SSR - queryValues will default to window if available
 * @returns
 */
export const useQueryStringArray = ({
  name,
  queryValues,
  defaultValue,
}: {
  name: string;
  queryValues?: Record<string, string>;
  defaultValue: string[];
}) =>
  useQueryStringRaw<string[]>({
    name,
    defaultValue,
    queryValues,
    stringify: (v) => (v.length === 0 ? undefined : v.join(',')),
    parse: (v) => (!v ? defaultValue : v.split(',')),
  });

/**
 * hook for query string value - single value
 * @param param0 can provide for SSR - queryValues will default to window if available
 * @returns
 */
export const useQueryStringSingle = ({
  name,
  queryValues,
  defaultValue,
}: {
  name: string;
  queryValues?: Record<string, string>;
  /**
   * default value. default undefined
   */
  defaultValue?: string | undefined;
}) =>
  useQueryStringRaw<string | undefined>({
    name,
    defaultValue,
    queryValues,
    stringify: (v) => v,
    parse: (v) => (!v ? defaultValue : v),
  });
