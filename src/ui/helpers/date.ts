import { plural } from './plural';
import { addDays, dateDiff } from '../../common/helpers/date';

/**
 * returns appropriate time diff string
 * @param lowDate
 * @param highDate defaults to Date.Now
 * @returns
 */
export const dateDiffToString = (lowDate: Date, highDate?: Date) => {
  const d = dateDiff(lowDate, highDate ?? new Date());
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

export const getDMY = (date: Date, dayOffset?: number) => {
  const date1 = addDays(date, dayOffset || 0);
  const d = String(date1.getDate()).padStart(2, '0');
  const m = String(date1.getMonth() + 1).padStart(2, '0'); // January is 0!
  const y = date1.getFullYear();

  return `${y}-${m}-${d}`;
};
