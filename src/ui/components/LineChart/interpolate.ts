import { distinctBy, groupByList } from '../../../common';
import { rangePercentage } from '../../../common/helpers/math';
import { isDate } from '../../helpers/date';
import { isToday } from './dateHelpers';
import type { ILineChartItemRaw } from './types';

interface ILineChartItemComp {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  name: string;
  origX: number;
  origY: number;
  isToday: boolean;
  isLast: boolean;
}

export const interpolate = (raw: ILineChartItemRaw[]) => {
  const points: ILineChartItemComp[] = [];
  const xs = raw.map((r) => r.x);
  const ys = raw.map((r) => r.y);
  const xMin = Math.min(...xs);
  const xMax = Math.max(...xs);
  const yMin = Math.min(...ys);
  const yMax = Math.max(...ys);

  let xTime = true;

  groupByList(
    raw.sort((a, b) => (a.x < b.x ? -1 : 1)),
    (a) => a.name,
  ).map(({ items }) => {
    const p: ILineChartItemComp[] = items.map((p, i) => {
      if (xTime && !isDate(p.x)) {
        xTime = false;
      }
      const x1 =
        rangePercentage({
          value: i === 0 ? p.x : items[i - 1].x,
          min: xMin,
          max: xMax,
        }) * 100;
      const x2 =
        rangePercentage({
          value: p.x,
          min: xMin,
          max: xMax,
        }) * 100;
      const y1 =
        rangePercentage({
          value: i === 0 ? p.y : items[i - 1].y,
          min: yMin,
          max: yMax,
        }) * 100;

      const y2 =
        rangePercentage({
          value: p.y,
          min: yMin,
          max: yMax,
        }) * 100;

      return {
        x1,
        x2,
        y1,
        y2,
        name: p.name,
        origX: p.x,
        origY: p.y,
        isToday: isToday(p.x),
        isLast: i === items.length - 1,
      } satisfies ILineChartItemComp;
    });
    points.push(...distinctBy(p, (s) => JSON.stringify(s)));
  });
  return { points, xTime };
};
