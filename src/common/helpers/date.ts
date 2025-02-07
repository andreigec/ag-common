import { toFixedDown } from './math';

export const getTimeSeconds = () => Math.ceil(new Date().getTime() / 1000);

export const addHours = (d: number, h: number) => {
  return new Date(d + h * 60 * 60 * 1000);
};

export const addDays = (dIn: Date, count: number) => {
  const d = new Date(dIn);
  d.setDate(d.getDate() + count);
  return d;
};

export const addMinutes = (date: Date, minutes: number) =>
  new Date(date.getTime() + minutes * 60000);

export const lastDayInMonth = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0);

/**
 * breaks ticks into time diffs
 * @param lowDate
 * @param highDate defaults to Date.Now
 * @returns
 */
export const dateDiff = (lowDate: Date, highDate?: Date) => {
  const ticksSince = (highDate ?? new Date()).getTime() - lowDate.getTime();
  const totalMinutes = toFixedDown(ticksSince / 1000 / 60, 0);
  const totalHours = toFixedDown(totalMinutes / 60, 0);
  const totalDays = toFixedDown(totalHours / 24, 0);
  const totalYears = toFixedDown(totalDays / 365, 0);

  return { totalMinutes, totalHours, totalDays, totalYears };
};

/**
 * convert csharp datetime to js datetime
 */
export const CSharpToJs = (charpTicks: number) => {
  // ticks are in nanotime; convert to microtime
  const ticks = charpTicks / 10000;
  // ticks are recorded from 1/1/1; get microtime difference from 1/1/1/ to 1/1/1970
  const epochMicrotimeDiff = Math.abs(new Date(0, 0, 1).setFullYear(1));
  // new date is ticks, converted to microtime, minus difference from epoch microtime
  const tickDate = new Date(ticks - epochMicrotimeDiff);

  return tickDate;
};

/**
 *
 * @param minutes
 * @param date default = now
 * @returns
 */
export const dateTimeToNearestMinute = (minutes: number, date?: Date) => {
  const coeff = 1000 * 60 * minutes;
  if (!date) {
    date = new Date();
  }

  const rounded = new Date(Math.round(date.getTime() / coeff) * coeff);

  return rounded;
};

export const dayInMs = 8.64e7;
export const twelveHMs = 43200000;

/** strings are padded numbers, eg '02' */
export interface IUtcDateParams {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const getUtcDateTime = (
  /** if true will 0 H,M,S */
  skipTime?: boolean,
) => {
  const date = new Date();

  const p = {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
    hours: date.getUTCHours(),
    minutes: date.getUTCMinutes(),
    seconds: date.getUTCSeconds(),
    tz: 'UTC',
  };
  if (skipTime) {
    p.hours = p.minutes = p.seconds = 0;
  }

  const ticks = toMs(p);
  return { ticks };
};

export const toMs = ({
  day,
  hours,
  minutes,
  month,
  seconds,
  year,
}: IUtcDateParams) => {
  // Calculate milliseconds in a year (365 days x 24 hours x 60 minutes x 60 seconds x 1000 milliseconds)
  const millisecondsInYear = 365 * 24 * 60 * 60 * 1000;

  // Calculate milliseconds in a month (based on 30 days)
  const millisecondsInMonth = 30 * 24 * 60 * 60 * 1000;

  // Calculate milliseconds in a day
  const millisecondsInDay = 24 * 60 * 60 * 1000;

  // Calculate milliseconds in an hour
  const millisecondsInHour = 60 * 60 * 1000;

  // Calculate milliseconds in a minute
  const millisecondsInMinute = 60 * 1000;

  // Calculate milliseconds in a second
  const millisecondsInSecond = 1000;

  // Calculate milliseconds since epoch based on given datetime values
  // Note: Math.floor() is used to round down to the nearest integer
  const millisecondsSinceEpoch =
    (year - 1970) * millisecondsInYear +
    (month - 1) * millisecondsInMonth +
    (day - 1) * millisecondsInDay +
    hours * millisecondsInHour +
    minutes * millisecondsInMinute +
    seconds * millisecondsInSecond;
  return millisecondsSinceEpoch;
};
