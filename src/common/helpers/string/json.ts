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
