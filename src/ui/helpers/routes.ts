import type { TLang } from '../../common/helpers/i18n';
import { AllLang } from '../../common/helpers/i18n';
import { castStringlyObject } from '../../common/helpers/object';
import { stringToObject } from '../../common/helpers/string/object';
import type { AxiosWrapperLite } from './jwt';

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
  url: URL;
  query: Record<string, string>;
  lang: TLang;
  userAgent: string;
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

export const getRenderLanguage = (host?: string | null): TLang => {
  if (!host) {
    return 'en';
  }

  const l = AllLang.find((l) => host.startsWith(l + '.'));
  if (l) {
    return l;
  }
  return 'en';
};

/**
 * get parsed url. use on client/SSR. defaults to window location if possible
 * @param param0
 * @returns
 */
export const getClientOrServerReqHref = ({
  url,
  query,
  forceServer = false,
  userAgent,
}: {
  url?: URL;
  query?: Record<string, string>;
  /**
   * if true, wont use window location. default false
   */
  forceServer?: boolean;
  /** will use navigator if possible */
  userAgent?: string;
}) => {
  if (typeof window !== 'undefined') {
    if (!forceServer) {
      url = new URL(window.location.href);
    }
  }

  if (typeof navigator !== 'undefined') {
    userAgent = navigator.userAgent;
  }

  if (!url) {
    throw new Error('no href');
  }

  return {
    url,
    query: { ...query, ...stringToObject(url.search || '', '=', '&') },
    userAgent: userAgent ?? '?',
    lang: getRenderLanguage(url.host),
  };
};

/**
 * get server side parsed url
 * @param param0 * @returns
 */
export const getServerReq = ({
  pathname,
  query,
  headers,
}: {
  /**
   * eg ctx?.req?.headers || {}
   */
  headers: {
    host?: string;
    'user-agent'?: string;
    'x-forwarded-proto'?: 'http' | 'https';
  };

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
    host: headers.host || '?',
    pathname,
  });

  const parsedQuery =
    !query || Object.keys(query).length === 0 ? {} : castStringlyObject(query);

  const ret = getClientOrServerReqHref({
    url: !href ? undefined : new URL(href),
    query: parsedQuery,
    forceServer: true,
    userAgent: headers['user-agent']?.toLowerCase(),
  });

  return ret;
};
