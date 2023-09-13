import { objectToString } from '../../common/helpers/object';
import { getRenderLanguage } from './routes';

/** next13 server only */
export const getNextAppRequest = ({
  headers,
}: {
  /** use next/headers() */
  headers: { get: (s: string) => string | null };
}) => {
  let searchParams: Record<string, string> = {};
  if (headers.get('x-invoke-query')) {
    searchParams = JSON.parse(
      decodeURIComponent(headers.get('x-invoke-query') ?? '{}'),
    );
  }

  const userAgent = headers.get('user-agent')?.toLowerCase() ?? '';
  const host = headers.get('host') ?? '';
  const pathname = headers.get('x-invoke-path') ?? '/';
  const protocol =
    host.includes(':443') || !host.includes(':') ? 'https:' : 'http:';

  let url = `${protocol}${host}${pathname}`;
  if (Object.keys(searchParams).length > 0) {
    const qs = '?' + objectToString(searchParams, '=', '&');
    url += qs;
  }

  return {
    url: new URL(url),
    query: searchParams,
    userAgent,
    lang: getRenderLanguage(host),
  };
};
