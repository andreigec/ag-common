/* eslint-disable @typescript-eslint/no-explicit-any */
function replacer(_ke: any, value: any) {
  if (!value) {
    return undefined;
  }

  if (value instanceof RegExp) return '__REGEXP ' + value.toString();

  if (typeof value === 'object' || Array.isArray(value)) {
    return value;
  }

  return value.toString();
}
export const JsonStringifyWithRegex = (o: any) =>
  JSON.stringify(o, replacer, 2);
