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
    // eslint-disable-next-line no-param-reassign
    date = new Date();
  }

  const rounded = new Date(Math.round(date.getTime() / coeff) * coeff);

  return rounded;
};

export const getUtcDateTime = () => {
  const date = new Date();

  const year = date.getUTCFullYear();
  const month = ('0' + (date.getUTCMonth() + 1)).slice(-2);
  const day = ('0' + date.getUTCDate()).slice(-2);
  const hours = ('0' + date.getUTCHours()).slice(-2);
  const minutes = ('0' + date.getUTCMinutes()).slice(-2);
  const seconds = ('0' + date.getUTCSeconds()).slice(-2);

  const datetime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds} UTC`;
  return new Date(datetime);
};
