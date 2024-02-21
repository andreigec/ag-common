export const tryJsonParse = <T>(
  str: string | undefined | null,
  defaultValue: T | undefined | null,
) => {
  if (!str) {
    return null;
  }

  try {
    return JSON.parse(str) as T;
  } catch (e) {
    return defaultValue;
  }
};

export function isJson(str: unknown) {
  try {
    JSON.parse(typeof str === 'string' ? str : JSON.stringify(str));
  } catch (e) {
    return false;
  }

  return true;
}

export const objectKeysToLowerCase = <T>(origObj: {
  [a: string]: T;
}): { [a: string]: T } => {
  if (!origObj || Object.keys(origObj).length === 0) {
    return {} as { [a: string]: T };
  }
  return Object.keys(origObj).reduce(
    (newObj, key) => {
      const val = origObj[key];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newVal: any =
        typeof val === 'object'
          ? objectKeysToLowerCase(val as unknown as { [a: string]: T })
          : val;

      // eslint-disable-next-line no-param-reassign
      newObj[key.toLowerCase()] = newVal;
      return newObj;
    },
    {} as { [a: string]: T },
  );
};

export const getObjectKeysAsNumber = (o: { [a: number]: unknown }) =>
  Object.keys(o).map((o2) => parseInt(o2, 10));

export interface IArrayType<T> {
  key: string;
  value: T;
}
export function objectToArray<T>(obj: { [a: string]: T }): IArrayType<T>[] {
  if (!obj) {
    return [];
  }

  const ret: IArrayType<T>[] = [];
  Object.keys(obj).forEach((ok) => {
    ret.push({ key: ok, value: obj[ok] });
  });
  return ret;
}

/**
 * Recursively alphabetically sort an object
 * @param object
 * @param depthLeft
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const objectAlphaSort = <T>(object: T, depthLeft = -1): T => {
  if (depthLeft === 0) {
    return object;
  }

  if (object !== null && typeof object === 'object') {
    return (
      Object.keys(object)
        .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .reduce((result: any, key) => {
          //@ts-ignore
          result[key] = objectAlphaSort(object[key], depthLeft - 1);

          return result;
        }, {})
    );
  } else if (Array.isArray(object)) {
    //@ts-ignore
    return object.map((obj) => objectAlphaSort(obj, depthLeft - 1));
  } else {
    return object;
  }
};

/**
 * Convert a random object type to a record<string,string>
 * @param entries Could be URLSearchParams
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function paramsToObject(entries: any) {
  const result: Record<string, string> = {};
  for (const [key, value] of entries) {
    result[key] = value;
  }
  return result;
}

/**
 * stringify an object of key values. Could be used to stringify a querystring url
 * @param obj
 * @param joinKeyValue
 * @param joinKeys
 * @returns
 */
export function objectToString(
  obj: Record<string, string>,
  /** eg '=' */
  joinKeyValue: string,
  /** eg '&' */
  joinKeys: string,
) {
  if (!obj || Object.keys(obj).length === 0) {
    return '';
  }

  const raw = Object.entries(obj).map(
    ([key, value]) => key + joinKeyValue + value,
  );
  const ret = raw.join(joinKeys);

  return ret;
}

/**
 * run func over values in object. can be used to cast value type string[]|string to string
 * @param orig
 * @param castF
 * @returns
 */
export const castObject = <TIn, TOut>(
  orig: Record<string, TIn>,
  castF: (t: TIn) => TOut,
) => {
  const ret: Record<string, TOut> = {};
  Object.entries(orig).forEach(([k, v]) => {
    ret[k] = castF(v);
  });
  return ret;
};

/** remove key values from an object where the value is null or undefined or other specific passed in values  */
export const removeUndefValuesFromObject = <T>(
  orig: Record<string, T>,
  /** other than null or undefined */
  ...additionalRemoves: T[]
) => {
  const ret: Record<string, T> = {};
  Object.entries(orig).forEach(([k, v]) => {
    if (v !== null && v !== undefined && !additionalRemoves?.includes(v)) {
      ret[k] = v;
    }
  });
  return ret;
};

/**
 * cast Record<string,string[]|string> to Record<string,string>. can be used for querystring params
 * @param orig
 * @returns
 */
export const castStringlyObject = (
  orig: Record<string, string | string[] | undefined>,
): Record<string, string> => {
  const noundef = removeUndefValuesFromObject(orig) as Record<
    string,
    string[] | string
  >;

  return castObject(noundef, (s) => {
    if (Array.isArray(s)) {
      return s.join(',');
    }
    return s;
  });
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isObject = (o: any) =>
  o && typeof o === 'object' && !Array.isArray(o);
