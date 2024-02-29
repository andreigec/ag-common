import { addDays, dateDiff } from '../../common/helpers/date';
import { plural } from './plural';

/**
 * returns appropriate time diff string
 * @param lowDate
 * @param highDate defaults to Date.Now
 * @returns
 */
export const dateDiffToString = (lowDate: Date, highDate?: Date) => {
  if (!lowDate) {
    return '';
  }

  const d = dateDiff(lowDate, highDate ?? new Date());
  if (isNaN(d.totalYears)) {
    return '';
  }

  let ts = `${d.totalYears} ${plural('yr', d.totalYears)} ago `;

  if (d.totalMinutes < 60) {
    ts = `${d.totalMinutes} ${plural('min', d.totalMinutes)} ago `;
  } else if (d.totalHours < 24) {
    ts = `${d.totalHours} ${plural('hr', d.totalHours)} ago `;
  } else if (d.totalDays < 365) {
    ts = `${d.totalDays} ${plural('day', d.totalDays)} ago `;
  }

  return ts;
};

export const getDMY = (
  date: Date,
  opt?: { dayOffset?: number; short?: boolean },
) => {
  const date1 = addDays(date, opt?.dayOffset ?? 0);
  const d = String(date1.getDate()).padStart(2, '0');
  const m = String(date1.getMonth() + 1).padStart(2, '0'); // January is 0!
  const y = date1.getFullYear();

  if (opt?.short) {
    return `${y.toString().substring(2, 4)}-${m}-${d}`;
  }

  return `${y}-${m}-${d}`;
};

export const isDate = (d: string | number) => {
  if (!isNaN(Number(d))) {
    //some arbitrary min date number
    if (Number(d) < 345600000) {
      return false;
    }
  }
  return new Date(d).toString() !== 'Invalid Date';
};
