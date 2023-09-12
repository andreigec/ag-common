import { objectToString } from '../../common/helpers/object';
import { getRenderLanguage } from './routes';

/** next13 server only */
export const getNextAppRequest = ({
  headers,
  searchParams: query,
}: {
  searchParams: Record<string, string>;
  /** use next/headers() */
  headers: { get: (s: string) => string | null };
}) => {
  const userAgent = headers.get('user-agent')?.toLowerCase() ?? '';
  const host = headers.get('host') ?? '';
  const pathname = headers.get('x-invoke-path') ?? '/';
  const protocol =
    host.includes(':443') || !host.includes(':') ? 'https:' : 'http:';

  let url = `${protocol}${host}${pathname}`;
  if (Object.keys(query).length > 0) {
    const qs = '?' + objectToString(query, '=', '&');
    url += qs;
  }

  return { url: new URL(url), query, userAgent, lang: getRenderLanguage(host) };
};
