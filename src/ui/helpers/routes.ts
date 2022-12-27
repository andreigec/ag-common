import { parse } from 'url';

import { getValidatedLang, TLang } from '../../common/helpers/i18n';
import { castStringlyObject } from '../../common/helpers/object';
import { stringToObject } from '../../common/helpers/string/object';
import { AxiosWrapperLite } from './jwt';

export type TProtocol = 'http:' | 'https:';
export interface LocationSubset {
  /**
   * slash only path eg /aaa/bbb
   */
  pathname: string;
  /**
   * eg #aaa
   */
  hash: string;
  /**
   * up to first slash eg http://aaa.com:1111
   */
  origin: string;
  /**
   * parse querystring keyvalues
   */
  query: Record<string, string>;
  /**
   * protocol less up to first slash eg aaa.com:1111
   */
  host: string;

  protocol: TProtocol;
  /**
   * full url
   */
  href: string;
  /**
   * url from first slash eg /aaa/bbb?q=a#111
   */
  path: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CacheItems = CacheItem<any>[];
export interface CacheItem<T> {
  cacheKey: string;
  prefillData: AxiosWrapperLite<T>;
  ttlSeconds: number;
}
export interface IInitialStateCommon {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  openApiCache?: CacheItem<any>[];
}

export interface IRequestCommon {
  darkMode: boolean;
  url: LocationSubset;
  lang: TLang;
  userAgent: string;
  defaultHost: string;
}
export interface IStateCommon<TRequest extends IRequestCommon>
  extends IInitialStateCommon {
  request: TRequest;
  pushPath: (path: string) => Promise<void>;
  /**
   * set for ssr
   */
  cookieDocument: string | undefined;
}

const calculateServerHref = ({
  host,
  pathname,
}: {
  pathname: string;
  host: string;
}) => {
  if (!host) {
    return undefined;
  }

  let href = '';

  if (host.includes('localhost')) {
    href += 'http://';
  } else {
    href += 'https://';
  }

  href += host + pathname;
  return decodeURIComponent(href);
};

const getRenderLanguage = ({
  defaultHost,
  url,
}: {
  defaultHost: string;
  url: LocationSubset;
}): TLang => {
  const prefixReg = new RegExp(
    `(.*?).(local|${defaultHost.toLowerCase()})`,
    'gim',
  );

  const host = url.host?.toLowerCase()?.trim() ?? '';
  const prefix = host.trim().length !== 0 && prefixReg.exec(host)?.[1];

  if (!prefix) {
    return 'en';
  }
  return getValidatedLang(prefix);
};

/**
 * get parsed url. use on client/SSR. defaults to window location if possible
 * @param param0
 * @returns
 */
export const getClientOrServerReqHref = ({
  url: { href, query, protocol },
  forceServer = false,
  userAgent,
  darkMode,
  defaultHost,
}: {
  url: {
    /**
     * parse querystring keyvalues
     */
    query?: Record<string, string>;
    /**
     * full url
     */
    href?: string;
    protocol: TProtocol;
  };
  /**
   * if true, wont use window location. default false
   */
  forceServer?: boolean;
  /** will use navigator if possible */
  userAgent?: string;
  /** will use window.matchMedia  */
  darkMode?: boolean;
  defaultHost: string;
}) => {
  if (typeof window !== 'undefined') {
    if (!forceServer) {
      href = window.location.href;
      protocol = window.location.protocol as TProtocol;
    }

    darkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  if (typeof navigator !== 'undefined') {
    userAgent = navigator.userAgent;
  }

  if (!href) {
    throw new Error('no href');
  }

  const parsed = parse(href);
  const url: LocationSubset = {
    hash: parsed.hash || '',
    host: parsed.host || '',
    origin: `${protocol}//${parsed.host}`,
    href: `${protocol}//${parsed.host}${parsed.path}${parsed.hash || ''}`,
    path: `${parsed.path}${parsed.hash || ''}`,
    pathname: parsed.pathname || '',
    protocol: protocol || '',
    query: { ...query, ...stringToObject(parsed.query || '', '=', '&') },
  };

  return {
    url,
    userAgent: userAgent ?? '?',
    darkMode: darkMode ?? false,
    lang: getRenderLanguage({ url, defaultHost }),
    defaultHost,
  };
};

/**
 * get server side parsed url
 * @param param0 * @returns
 */
export const getServerReq = ({
  defaultHost,
  pathname,
  query,
  headers,
  encrypted,
}: {
  /**
   * eg ctx?.req?.headers || {}
   */
  headers: {
    host?: string;
    'user-agent'?: string;
    'x-forwarded-proto'?: 'http' | 'https';
  };

  /** what to use if host is not available on headers */
  defaultHost: string;
  /**
   * eg ctx.asPath || '/'
   */
  pathname: string;
  /**
   * eg ctx.query
   */
  query: Record<string, string | string[] | undefined>;
  /**
   * eg (ctx?.req?.socket as any)?.encrypted)
   */
  encrypted: boolean;
}) => {
  const href = calculateServerHref({
    host: headers.host || defaultHost,
    pathname,
  });

  let protocol: TProtocol = 'http:';
  if (headers['x-forwarded-proto']?.includes('https') || encrypted) {
    protocol = 'https:';
  }

  const parsedQuery =
    !query || Object.keys(query).length === 0
      ? undefined
      : castStringlyObject(query);

  const ret = getClientOrServerReqHref({
    url: {
      href,
      query: parsedQuery,
      protocol,
    },
    forceServer: true,
    userAgent: headers['user-agent']?.toLowerCase(),
    defaultHost,
  });

  return ret;
};

export interface INextCtx {
  req?: {
    headers?: {
      host?: string;
    };
  };
  asPath?: string;
  query: Record<string, string | string[] | undefined>;
}
