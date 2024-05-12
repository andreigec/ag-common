import { isNumber } from './math';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function loadCsvAsJson<T extends Record<string | number, any>>(p: {
  fileData: string;
}): T[] {
  const lines = p.fileData.split(/[\r]?\n/);

  let sep = ',';
  if (lines[0].split(',').length === 1 && lines[0].split(';').length > 1) {
    sep = ';';
  }

  const headers = lines[0].split(sep);

  const jsonData: T[] = lines.slice(1).map((line) => {
    const values: string[] = [];
    let inQuote = false;
    let currentValue = '';

    for (const char of line) {
      if (char === '"') {
        inQuote = !inQuote;
      } else if (char === sep && !inQuote) {
        values.push(currentValue.trim());
        currentValue = '';
      } else {
        currentValue += char;
      }
    }

    values.push(currentValue.trim());

    const obj = {} as T;

    for (let i = 0; i < headers.length; i++) {
      const v = values[i];
      if (v === '-') {
        //ignore
      } else if (isNumber(v)) {
        //@ts-ignore
        obj[headers[i]] = Number(v);
      } else {
        //@ts-ignore
        obj[headers[i]] = v;
      }
    }

    return obj;
  });

  return jsonData;
}
