import { trimSide } from '../../common';
import type { TLang } from '../../common/helpers/i18n';
import { AllLang } from '../../common/helpers/i18n';
import { castStringlyObject } from '../../common/helpers/object';
import { stringToObject } from '../../common/helpers/string/object';
import { stripUrl } from '../../common/helpers/string/url';
import type { AxiosWrapperLite } from './jwt';

export type TProtocol = 'http:' | 'https:';
export interface URLLite {
  hash: string;
  host: string;
  hostname: string;
  href: string;
  origin: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  //searchParams: Record<string, string>;
  username: string;
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
  url: URLLite;
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

export const getClientReqHref = (): IRequestCommon => {
  const nu = new URL(window.location.href);
  const url = stripUrl(nu);
  const query = stringToObject(trimSide(url.search, true, '?') || '', '=', '&');
  const userAgent = navigator.userAgent;
  return { url, query, userAgent, lang: getRenderLanguage(url.host) };
};

/**
 * get parsed url. use on client/SSR. defaults to window location if possible
 * @param param0
 * @returns
 */
export const getClientOrServerReqHref = ({
  url,
  query,
  userAgent,
}: {
  url?: URLLite;
  query?: Record<string, string>;

  /** will use navigator if possible */
  userAgent?: string;
}): IRequestCommon => {
  if (typeof window !== 'undefined') {
    return getClientReqHref();
  }

  if (!url) {
    throw new Error('no href');
  }

  return {
    url,
    query: {
      ...query,
      ...stringToObject(trimSide(url.search, true, '?') || '', '=', '&'),
    },
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
    host: headers.host || 'testhost',
    pathname,
  });

  const parsedQuery =
    !query || Object.keys(query).length === 0 ? {} : castStringlyObject(query);
  const ret = getClientOrServerReqHref({
    url: !href ? undefined : new URL(href),
    query: parsedQuery,
    userAgent: headers['user-agent']?.toLowerCase(),
  });

  return ret;
};
