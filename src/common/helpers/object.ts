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

export function isJson(str: string | Record<string, unknown>) {
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
  return Object.keys(origObj).reduce((newObj, key) => {
    const val = origObj[key];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newVal: any =
      typeof val === 'object'
        ? objectKeysToLowerCase(val as unknown as { [a: string]: T })
        : val;

    // eslint-disable-next-line no-param-reassign
    newObj[key.toLowerCase()] = newVal;
    return newObj;
  }, {} as { [a: string]: T });
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

export const objectAlphaSort = (object: any, depthLeft = -1): object => {
  if (depthLeft === 0) {
    return object;
  }

  if (object !== null && typeof object === 'object') {
    return Object.keys(object)
      .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
      .reduce((result: any, key) => {
        result[key] = objectAlphaSort(object[key], depthLeft - 1);

        return result;
      }, {});
  } else if (Array.isArray(object)) {
    return object.map((obj) => objectAlphaSort(obj, depthLeft - 1));
  } else {
    return object;
  }
};
