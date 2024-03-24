const toFixed = (num: number, fixed: number): number => {
  const re = new RegExp(`^-?\\d+(?:.\\d{0,${fixed || -1}})?`);
  const x = num.toString().match(re)?.[0];
  if (!x) {
    return num;
  }

  return Number.parseFloat(x);
};

/** convert total seconds to nearest unit (minutes, hours, days)
 * @param seconds total seconds > 0
 * @param precision optional precision of number
 */
export const secondsInNearest = ({
  seconds,
  precision = 2,
}: {
  seconds: number;
  precision?: number;
}) => {
  if (seconds <= 0) {
    return 'Now';
  }

  if (seconds < 90) {
    const v = toFixed(seconds, precision);

    return `${v} ${v === 1 ? 'second' : 'seconds'}`;
  }

  const mins = seconds / 60;
  if (mins < 120) {
    const v = toFixed(mins, precision);

    return `${v} ${v === 1 ? 'minute' : 'minutes'}`;
  }

  const hours = mins / 60;
  if (hours < 24) {
    const v = toFixed(hours, precision);

    return `${v} ${v === 1 ? 'hour' : 'hours'}`;
  }

  const days = hours / 24;
  const v = toFixed(days, precision);

  return `${v} ${v === 1 ? 'day' : 'days'}`;
};
