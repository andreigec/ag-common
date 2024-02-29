import { dateDiffToString, getDMY } from '../../helpers/date';

export const timeLegendTitle = (s: number) => {
  const ret = getDMY(new Date(s), { short: true });
  return ret;
};

export const timeTooltipTitle = (s: number) => {
  if (!s) {
    return '';
  }

  const dmy = getDMY(new Date(s));
  let diff = '';
  const d = new Date();
  const td = d.getTime() - Number(s);
  //today
  if (td < 0) {
    diff = 'Today';
  } else {
    const d1 = dateDiffToString(new Date(Number(s)), d);
    diff = `(${d1})`;
  }

  return `${dmy} ${diff}`;
};
