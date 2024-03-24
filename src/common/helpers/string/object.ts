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

  raw.split(splitKeys).forEach((set) => {
    const [k, v] = set.split(splitKeyValue);
    if (k) {
      ret[k] = v;
    }
  });
  return ret;
}
