import { take } from '../../../common/helpers/array';
import { sumArray } from '../../../common/helpers/math';
import { copy } from '../../../common/helpers/object';
import type { ILineChartItemRaw, ILineChartTooltip } from './types';

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
const shownResults = 4;

const getTopItems = ({
  data,
  colours,
}: {
  data: ILineChartItemRaw[];
  colours: Record<string, string>;
}) => {
  const val: Record<string, { value: number; colour: string; name: string }> =
    {};

  data.forEach((d) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!val[d.name]) {
      val[d.name] = { colour: colours[d.name], name: d.name, value: d.y };
    } else {
      val[d.name].value += d.y;
    }
  });
  const values = Object.values(val).sort((a, b) =>
    a.value < b.value ? 1 : -1,
  );

  const legendItems = take(values, shownResults).part.map((v) => ({
    colour: v.colour,
    name: v.name,
    y: v.value,
    x: 0,
  }));
  return legendItems;
};

export const getLegendItems = (
  p: ILineChartTooltip & {
    /** if true, will only return top items */
    fixed: boolean;
  },
): ILegendItems => {
  let values =
    p.selectedXs?.map((a) => ({
      colour: p.colours[a.name],
      name: a.name,
      y: a.y,
      x: a.x,
    })) ?? [];

  if (p.fixed || values.length === 0) {
    values = getTopItems(p);
  }

  const total = sumArray(values.map((a) => a.y));
  const min = total * 0.1;

  let part = values.sort((a, b) => (a.y < b.y ? 1 : -1));
  let rest: ILegendItem[] = [];
  if (part.length > shownResults) {
    part = take(
      part.filter((r) => r.y > min),
      shownResults,
    ).part;
    rest = copy(values).filter((r) => !part.find((p) => p.name === r.name));
  }

  const restTotal = sumArray(rest.map((s) => s.y));
  return { part, rest, restTotal, total };
};
