export const toFixed = (num: number, fixed: number): number => {
  const re = new RegExp(`^-?\\d+(?:.\\d{0,${fixed || -1}})?`);
  const x = num?.toString()?.match(re)?.[0];
  if (!x) {
    return num;
  }

  return Number.parseFloat(x);
};

export function roundToHalf(converted: number) {
  let decimal = converted - parseInt(converted.toString(), 10);
  decimal = Math.round(decimal * 10);
  if (decimal === 5) {
    return parseInt(converted.toString(), 10) + 0.5;
  }

  if (decimal < 3 || decimal > 7) {
    return Math.round(converted);
  }
  return parseInt(converted.toString(), 10) + 0.5;
}

/** restricts value between two numbers */
export function clamp({
  value,
  min,
  max,
}: {
  value: number;
  min: number;
  max: number;
}) {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }
  return value;
}

export function sumArray(array: number[]) {
  return array.reduce((a, b) => a + b, 0);
}

export function isNumber(val: string) {
  const re = new RegExp(`(\\d+\\.?\\d*)(\\d)`);
  const m = val.toString().match(re);

  return !!m;
}

export function toFixedDown(num: number, scale: number) {
  if (!`${num}`.includes('e')) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return +`${Math.round(`${num}e+${scale}`)}e-${scale}`;
  }

  const arr = `${num}`.split('e');
  let sig = '';

  if (+arr[1] + scale > 0) {
    sig = '+';
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return +`${Math.round(`${+arr[0]}e${sig}${+arr[1] + scale}`)}e-${scale}`;
}

/**
 * get percentage of value within supplied range
 * eg value of 5 between 0-10 = 0.5. value of 5 between 5-10 = 0
 * @param param0
 * @returns
 */
export function rangePercentage({
  value,
  min,
  max,
}: {
  value: number;
  min: number;
  max: number;
}) {
  const v = clamp({ value, min, max });
  const r = (v - min) / (max - min);

  if (isNaN(r)) {
    return 0;
  }

  return r;
}

/** will interpolate value of percent inside range. 0.5 between 100 and 200 = 150 */
export const interpolatePercentInRange = ({
  percent,
  min,
  max,
}: {
  percent: number;
  min: number;
  max: number;
}) => (max - min) * percent + min;
