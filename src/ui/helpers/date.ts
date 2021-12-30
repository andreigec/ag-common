import { addDays } from '../../common/helpers/date';
import { toFixedDown } from '../../common/helpers/math';
import { plural } from './plural';

export const daydiffstr = (dayticks: number) => {
  const ticksSince = new Date().getTime() - dayticks;
  const totalMinutes = toFixedDown(ticksSince / 1000 / 60, 0);
  const totalHours = toFixedDown(totalMinutes / 60, 0);
  const totalDays = toFixedDown(totalHours / 24, 0);
  const totalYears = toFixedDown(totalDays / 365, 0);
  let ts = `${totalYears} ${plural('yr', totalYears)} ago `;

  if (totalMinutes < 60) {
    ts = `${totalMinutes} ${plural('min', totalMinutes)} ago `;
  } else if (totalHours < 24) {
    ts = `${totalHours} ${plural('hr', totalHours)} ago `;
  } else if (totalDays < 365) {
    ts = `${totalDays} ${plural('day', totalDays)} ago `;
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
