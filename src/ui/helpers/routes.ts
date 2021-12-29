import {
  AuthedUserContext,
  ICognitoAuth,
  ICognitoAuthProviderProps,
} from 'analytica.click';

export interface LocationSubset {
  pathname: string;
  hash: string;
  origin: string;
  query: Record<string, string>;
  host: string;
}

export interface IRequest {
  darkMode: boolean;
  url: LocationSubset;
  headerTitle?: string;
  seed?: number;
  lang: 'en';
}
export type CacheItems = CacheItem[];
export interface CacheItem {
  cacheKey: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prefillData: any;
  ttlSeconds: number;
}
export interface IInitialState {
  openApiCache?: CacheItem[];
  headerTitle?: string;
  seed?: number;
}

export interface IState extends IInitialState {
  request: IRequest;
  auth: ICognitoAuth;
  CognitoAuthContext: React.Context<AuthedUserContext>;
  CognitoAuthProvider: (p: ICognitoAuthProviderProps) => JSX.Element;
  pushPath: (path: string) => Promise<void>;
}
