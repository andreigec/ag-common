import { ICognitoAuth } from './cognito';
import { AxiosWrapperLite } from './jwt';
import { TLang } from '../../common/helpers/i18n';
import { stringToObject } from '../../common/helpers/string';
import { castStringlyObject } from '../../common/helpers/object';
import { parse } from 'url';

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
  /**
   * eg http: or https:
   */
  protocol: string;
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
}
export interface IStateCommon<TRequest extends IRequestCommon>
  extends IInitialStateCommon {
  request: TRequest;
  auth: ICognitoAuth;
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

/**
 * get parsed url. use on client/SSR. defaults to window location if possible
 * @param param0
 * @returns
 */
export const getClientOrServerReqHref = ({
  url: { href, query },
  userAgent,
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
  };

  /** will use navigator if possible */
  userAgent?: string;
}) => {
  if (typeof window !== 'undefined') {
    href = window.location.href;
  }

  if (typeof navigator !== 'undefined') {
    if (navigator.userAgent) {
      userAgent = navigator.userAgent;
    }
  }

  if (!userAgent) {
    userAgent = '?';
  }

  if (!href) {
    throw new Error('no href');
  }

  const parsed = parse(href);
  const url: LocationSubset = {
    hash: parsed.hash || '',
    host: parsed.host || '',
    origin: `${parsed.protocol}//${parsed.host}`,
    href: `${parsed.protocol}//${parsed.host}${parsed.path}${
      parsed.hash || ''
    }`,
    path: `${parsed.path}${parsed.hash || ''}`,
    pathname: parsed.pathname || '',
    protocol: parsed.protocol || '',
    query: { ...query, ...stringToObject(parsed.query || '', '=', '&') },
  };

  return { url, userAgent };
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
}: {
  /**
   * eg ctx?.req?.headers || {}
   */
  headers: { host?: string; 'user-agent'?: string };

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
}) => {
  const href = calculateServerHref({
    host: headers.host || defaultHost,
    pathname,
  });

  const parsedQuery =
    !query || Object.keys(query).length === 0
      ? undefined
      : castStringlyObject(query);

  const ret = getClientOrServerReqHref({
    url: {
      href,
      query: parsedQuery,
    },
    forceServer: true,
    userAgent: headers['user-agent']?.toLowerCase(),
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
