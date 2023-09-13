import { trim } from './trim';

export interface ISite {
  siteUrl: string;
  niceSiteUrl: string;
}

/**
 * removes protocol, and trailing slashes
 */
export const niceUrl = (siteUrl: string) => {
  if (!siteUrl) {
    return undefined;
  }

  let niceSiteUrl = siteUrl
    .substring(siteUrl.indexOf(':') + 1)
    .replace('sc-domain:', '')
    .replace('https://', '')
    .replace('http://', '');

  niceSiteUrl = trim(niceSiteUrl, '/');
  return { siteUrl, niceSiteUrl } as ISite;
};

export function isValidUrl(raw: string) {
  try {
    const url = new URL(raw);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
}

export const stripUrl = (nu: URL) => ({
  hash: nu.hash,
  host: nu.host,
  hostname: nu.hostname,
  href: nu.href,
  origin: nu.origin,
  password: nu.password,
  pathname: nu.pathname,
  port: nu.port,
  protocol: nu.protocol,
  search: nu.search,
  username: nu.username,
});
