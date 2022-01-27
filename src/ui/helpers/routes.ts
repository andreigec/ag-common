import { TLang } from '../../common/helpers/i18n';
import { ICognitoAuth } from './cognito';
import { AxiosWrapper } from './jwt';

export interface LocationSubset {
  pathname: string;
  hash: string;
  origin: string;
  query: Record<string, string>;
  host: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CacheItems = CacheItem<any>[];
export interface CacheItem<T> {
  cacheKey: string;
  prefillData: AxiosWrapper<T>;
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
