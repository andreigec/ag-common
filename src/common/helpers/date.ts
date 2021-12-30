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

export const dateDiffDays = (date1: Date, date2: Date) => {
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);

  return Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
      Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
      1000,
  );
};

export const CSharpToJs = (charpTicks: number) => {
  // ticks are in nanotime; convert to microtime
  const ticks = charpTicks / 10000;
  // ticks are recorded from 1/1/1; get microtime difference from 1/1/1/ to 1/1/1970
  const epochMicrotimeDiff = Math.abs(new Date(0, 0, 1).setFullYear(1));
  // new date is ticks, converted to microtime, minus difference from epoch microtime
  const tickDate = new Date(ticks - epochMicrotimeDiff);

  return tickDate;
};

export const dateTimeToNearestMinute = (minutes: number, date?: Date) => {
  const coeff = 1000 * 60 * minutes;
  if (!date) {
    // eslint-disable-next-line no-param-reassign
    date = new Date();
  }

  const rounded = new Date(Math.round(date.getTime() / coeff) * coeff);

  return rounded;
};
