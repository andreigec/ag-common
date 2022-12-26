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
  let url: URL | undefined;

  try {
    url = new URL(raw);
  } catch (_) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
}
