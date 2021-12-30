export const csvJSON = (csv: string) => {
  const lines = csv.split('\n');
  const result = [];
  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  const headers = lines[0].split(',');

  for (let i = 1; i < lines.length; i += 1) {
    const obj = {};
    const currentline = lines[i].split(',');

    for (let j = 0; j < headers.length; j += 1) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }

  return result;
};

export function trimSide(str: string, fromStart = true, ...params: string[]) {
  const pstr = params.join('');
  if (!str) {
    return str;
  }

  const ret = str.replace(new RegExp(`[${pstr}]*$`, 'g'), '');

  if (fromStart) {
    return ret.replace(new RegExp(`^[${pstr}]*`, 'g'), '');
  }

  return ret;
}

export function trim(str: string, ...params: string[]) {
  str = trimSide(str, true, ...params);
  str = trimSide(str, false, ...params);
  return str;
}

export function truncate(
  str: string | null | undefined,
  n: number,
  ellip: string,
) {
  if (!str) {
    return undefined;
  }
  return str.length > n ? str.substr(0, n - 1) + ellip : str;
}

export interface ISite {
  siteUrl: string;
  niceSiteUrl: string;
}
/**
 * removes protocol, and trailing slashes
 */
export const niceUrl = (siteUrl: string) => {
  if (!siteUrl) {
    return siteUrl;
  }

  let niceSiteUrl = siteUrl
    .substring(siteUrl.indexOf(':') + 1)
    .replace('sc-domain:', '')
    .replace('https://', '')
    .replace('http://', '');

  niceSiteUrl = trim(niceSiteUrl, '/');
  return { siteUrl, niceSiteUrl } as ISite;
};

/**
 * string -> String
 * @param str
 * @returns
 */
export function toTitleCase(str: string) {
  if (!str) {
    return str;
  }
  return str.replace(
    /\w\S*/g,
    (txt: string) =>
      txt && txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase(),
  );
}
