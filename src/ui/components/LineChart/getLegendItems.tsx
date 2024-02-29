import { take } from '../../../common/helpers/array';
import { sumArray } from '../../../common/helpers/math';
import type { ILineChartTooltip } from './types';

export interface ILegendItem {
  y: number;
  colour: string;
  name: string;
}
export interface ILegendItems {
  part: ILegendItem[];
  rest: ILegendItem[];
  restTotal: number;
  total: number;
}
export const getLegendItems = (p: ILineChartTooltip): ILegendItems => {
  const values =
    p.selectedXs?.map((a) => ({
      colour: p.colours[a.name],
      name: a.name,
      y: a.y,
      x: a.x,
    })) ?? [];

  const total = sumArray(values.map((a) => a.y));
  const min = total * 0.1;
  const shownResults = 4;

  let part = values.sort((a, b) => (a.y < b.y ? 1 : -1));
  let rest: ILegendItem[] = [];
  if (part.length > shownResults) {
    part = take(
      part.filter((r) => r.y > min),
      shownResults,
    ).part;
    rest = (JSON.parse(JSON.stringify(values)) as typeof values).filter(
      (r) => !part.find((p) => p.name === r.name),
    );
  }

  const restTotal = sumArray(rest.map((s) => s.y));
  return { part, rest, restTotal, total };
};
