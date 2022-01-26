import { TLang } from '../..';
import { ICognitoAuth } from './cognito';

export interface LocationSubset {
  pathname: string;
  hash: string;
  origin: string;
  query: Record<string, string>;
  host: string;
}

export type CacheItems = CacheItem[];
export interface CacheItem {
  cacheKey: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prefillData: any;
  ttlSeconds: number;
}
export interface IInitialStateCommon {
  openApiCache?: CacheItem[];
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
}
