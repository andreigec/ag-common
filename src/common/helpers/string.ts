export const toBase64 = (str: string) => Buffer.from(str).toString('base64');
export const fromBase64 = (str: string) =>
  Buffer.from(decodeURIComponent(str), 'base64').toString();
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
  if (!str) {
    return '';
  }

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

/**
 * remove all found params from str
 * @param str
 * @param params allows single chars and/or strings
 * @returns
 */
export function replaceRemove(str: string, ...params: string[]) {
  const replaceSingles: string[] = [];
  const replaceStrings: string[] = [];
  params.forEach((p) => {
    if (typeof p !== 'string') {
      throw new Error('trim only supports strings');
    }

    if (p.length === 1) {
      replaceSingles.push(p);
    } else {
      replaceStrings.push(p);
    }
  });

  let firstLength = 0;
  let changedLength = 0;
  let ret = str;
  const singleRegex = `[${replaceSingles.join('')}]*`;
  const stringRegex = `(${replaceStrings.map((s) => `(${s})`).join('|')})*`;
  do {
    firstLength = ret.length;
    ret = ret.replace(new RegExp(stringRegex, 'gim'), '');
    ret = ret.replace(new RegExp(singleRegex, 'gim'), '');
    changedLength = ret.length;
  } while (changedLength < firstLength);

  return ret;
}

export function containsInsensitive(str: string, ...args: string[]) {
  if (!str || !args) {
    return false;
  }

  const l = str.toLowerCase();

  return !!args.find((a) => l.includes(a));
}

/**
 * safely handles circular references
 * @param obj
 * @param indent
 * @returns
 */
export const safeStringify = (obj: unknown, indent = 2) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let cache: any = [];
  const retVal = JSON.stringify(
    obj,
    (_key, value) =>
      typeof value === 'object' && value !== null
        ? cache.includes(value)
          ? undefined // Duplicate reference found, discard key
          : cache.push(value) && value // Store value in our collection
        : value,
    indent,
  );

  cache = null;
  return retVal;
};

export const chunkString = (str: string, length: number) =>
  str.match(new RegExp(`.{1,${length}}`, 'g')) as string[];

/**
 * object to string - can be used for querystring a=b&c=d etc
 * @param raw eg a=b&c=d
 * @param splitKeyValue eg =
 * @param splitKeys eg &
 */
export function stringToObject(
  raw: string,
  splitKeyValue: string,
  splitKeys: string,
) {
  const ret: Record<string, string> = {};
  if (!stringToObject) {
    return ret;
  }

  raw.split(splitKeys).forEach((set) => {
    const [k, v] = set.split(splitKeyValue);
    if (k) {
      ret[k] = v;
    }
  });
  return ret;
}
