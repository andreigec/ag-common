import { TLang } from '../../common/helpers/i18n';
import { ICognitoAuth } from './cognito';
import { AxiosWrapperLite } from './jwt';
import { parse } from 'url';
import { stringToObject } from '../../common/helpers/string';

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
  headerTitle?: string;
  seed?: number;
}

export interface IRequestCommon {
  darkMode: boolean;
  url: LocationSubset;
  headerTitle?: string;
  seed?: number;
  lang: TLang;
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
  return href;
};

/**
 * get parsed url. will use window if possible
 * @param param0
 * @returns
 */
export const getClientOrServerReqHref = ({ href }: { href?: string }) => {
  if (typeof window !== 'undefined') {
    href = window.location.href;
  }

  if (!href) {
    throw new Error('no href');
  }

  const parsed = parse(href);
  const ret: LocationSubset = {
    hash: parsed.hash || '',
    host: parsed.host || '',
    origin: `${parsed.protocol}//${parsed.host}`,
    href: `${parsed.protocol}//${parsed.host}${parsed.path}${
      parsed.hash || ''
    }`,
    path: `${parsed.path}${parsed.hash || ''}`,
    pathname: parsed.pathname || '',
    protocol: parsed.protocol || '',
    query: stringToObject(parsed.query || '', '=', '&'),
  };

  return ret;
};

export const getClientOrServerReq = ({
  host,
  pathname,
}: {
  pathname: string;
  host: string;
}) => {
  const href = calculateServerHref({
    host,
    pathname,
  });

  return getClientOrServerReqHref({ href });
};
