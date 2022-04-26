import { ICallOpenApi, OverrideAuth } from './types';
import { callOpenApi } from './direct';
import { CacheItems } from '../routes';
import { getCookieString } from '../cookie';
import { toBase64 } from '../../../common/helpers/string';
import { AxiosWrapperLite } from '../jwt';
import NodeCache from 'node-cache';

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
    overrideAuth?.id_token ||
    getCookieString({
      name: 'id_token',
      defaultValue: '',
    });

  let cacheKeyRet: string | undefined;

  if (cacheKey) {
    const pref = !authkeyPrefix ? '' : toBase64(authkeyPrefix);
    cacheKeyRet = cacheKey + '||' + pref;
  }
  return cacheKeyRet;
}

export const setOpenApiCacheRaw = async <T>(
  p: {
    cacheKey: string;
    overrideAuth?: OverrideAuth | undefined;
  },
  data: T,
) => {
  const userPrefixedCacheKey = getCacheKey(p);

  if (callOpenApiCache && userPrefixedCacheKey) {
    callOpenApiCache.set<T | undefined>(userPrefixedCacheKey, data);
  }
};

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

  //get ssr cache value
  const ssrCached: T | undefined = p.ssrCacheItems?.find(
    (s) => s.cacheKey === p.cacheKey,
  )?.prefillData?.data;

  //if we have ssr cache and there is no existing cache then set
  if (!callOpenApiCache.get<T>(userPrefixedCacheKey) && ssrCached) {
    callOpenApiCache.set<T>(userPrefixedCacheKey, ssrCached);
  }

  //return cached data, or ssr data if that has already expired (ttl <=0)
  const data = callOpenApiCache.get<T>(userPrefixedCacheKey) || ssrCached;
  if (!data) {
    return undefined;
  }
  return { data };
};

export const callOpenApiCached = async <T, TDefaultApi>(
  p: TCallOpenApiCached<T, TDefaultApi>,
): Promise<AxiosWrapperLite<T | undefined>> => {
  const raw = callOpenApiCachedRaw(p);
  if (raw) {
    return raw;
  }

  const resp = await callOpenApi(p);
  if (resp.error) {
    return { error: resp.error, data: undefined };
  }

  await setOpenApiCacheRaw(p, resp.data);
  return resp;
};
