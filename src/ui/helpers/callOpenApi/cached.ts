import { getCookieWrapper } from '../cookie';
import { ICallOpenApi, OverrideAuth } from './types';
import { CacheItems } from '../routes';
import NodeCache from 'node-cache';
import { callOpenApi } from './direct';
import { toBase64 } from '../../../common/helpers/string';
import { AxiosWrapperLite } from '../jwt';

export type TCallOpenApiCached<T, TDefaultApi> = ICallOpenApi<
  T,
  TDefaultApi
> & {
  /**
   * if falsey, will run callOpenApi directly
   */
  cacheKey: string;
  /**
   * will shortcut and return the appropriate axioswrapper data if cachekey is found
   */
  ssrCacheItems?: CacheItems;
  /**
   * default ttl in seconds for cache - default 120s
   */
  cacheTtl?: number;
  /**
   * (ssr) if true, wont run callopenapi if data is not cached
   */
  onlyCached?: boolean;
};

let callOpenApiCache: NodeCache | undefined;
function getCacheKey({
  cacheKey,
  overrideAuth,
}: {
  cacheKey: string;
  overrideAuth?: OverrideAuth;
}) {
  const authkeyPrefix =
    overrideAuth?.id_token || getCookieWrapper<string>({ cname: 'id_token' });

  let cacheKeyRet: string | undefined;

  if (cacheKey) {
    const pref = !authkeyPrefix ? '' : toBase64(authkeyPrefix);
    cacheKeyRet = cacheKey + '||' + pref;
  }
  return cacheKeyRet;
}

/**
 * sync call to callOpenApiCache.
 * @param p
 * @returns undefined if no cache item
 */
export const callOpenApiCachedRaw = <T, TDefaultApi>(
  p: TCallOpenApiCached<T, TDefaultApi>,
): AxiosWrapperLite<T> | undefined => {
  const userPrefixedCacheKey = getCacheKey(p);

  if (!userPrefixedCacheKey) {
    return undefined;
  }

  if (!callOpenApiCache) {
    callOpenApiCache = new NodeCache({ stdTTL: p.cacheTtl || 120 });
  }

  const ssrCached = p.ssrCacheItems?.find((s) => s.cacheKey === p.cacheKey);
  if (
    !callOpenApiCache.get<T>(userPrefixedCacheKey) &&
    ssrCached?.prefillData?.data
  ) {
    callOpenApiCache.set<T>(userPrefixedCacheKey, ssrCached.prefillData?.data);
  }

  const cached = callOpenApiCache.get<T>(userPrefixedCacheKey);
  if (cached) {
    return { data: cached };
  }
  return undefined;
};

export const callOpenApiCached = async <T, TDefaultApi>(
  p: TCallOpenApiCached<T, TDefaultApi>,
): Promise<AxiosWrapperLite<T>> => {
  const raw = callOpenApiCachedRaw(p);
  if (raw) {
    return raw;
  }

  const resp = await callOpenApi(p);
  if (resp.error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return { error: resp.error, data: undefined as any };
  }

  const userPrefixedCacheKey = getCacheKey(p);

  if (callOpenApiCache && userPrefixedCacheKey) {
    callOpenApiCache.set<T>(userPrefixedCacheKey, resp.data);
  }
  return resp;
};
