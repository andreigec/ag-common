import { take } from '../../../common/helpers/array';
import { sumArray } from '../../../common/helpers/math';
import type { ILineChart } from './types';

export interface ILegendItem {
  value: number;
  colour: string;
  name: string;
}
export interface ILegendItems {
  part: ILegendItem[];
  rest: ILegendItem[];
  restTotal: number;
}
export const getLegendItems = ({
  data,
}: {
  data: {
    total: number;
    values: ILegendItem[];
  };
}): ILegendItems => {
  const min = data.total * 0.1;
  const shownResults = 4;

  let part = data.values.sort((a, b) => (a.value < b.value ? 1 : -1));
  let rest: ILegendItem[] = [];
  if (part.length > shownResults) {
    part = take(
      part.filter((r) => r.value > min),
      shownResults,
    ).part;
    rest = (JSON.parse(JSON.stringify(data.values)) as ILegendItem[]).filter(
      (r) => !part.find((p) => p.name === r.name),
    );
  }

  const restTotal = sumArray(rest.map((s) => s.value));
  return { part, rest, restTotal };
};

export const legendItemsKeys = (p: ILineChart) => {
  const total = sumArray(p.data.map((a) => a.y));

  const val: Record<string, { value: number; colour: string; name: string }> =
    {};

  p.data.forEach((d) => {
    if (!val[d.name]) {
      val[d.name] = { colour: p.colours[d.name], name: d.name, value: d.y };
    } else {
      val[d.name].value += d.y;
    }
  });
  const values = Object.values(val);

  const legendItems = getLegendItems({ data: { total, values } }).part.map(
    (v) => ({
      colour: v.colour,
      name: v.name,
    }),
  );
  return legendItems;
};
