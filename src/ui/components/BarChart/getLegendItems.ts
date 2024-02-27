import { take } from '../../../common/helpers/array';
import { sumArray } from '../../../common/helpers/math';
import type { IBarChartData } from './types';

export const getLegendItems = ({
  data,
  selectedKey,
}: {
  data: IBarChartData;
  selectedKey?: string;
}) => {
  const min = data.total * 0.1;
  const shownResults = 4;
  const part = take(
    data.values.filter((r) => r.value > min),
    shownResults,
  ).part;

  const rest = (
    JSON.parse(JSON.stringify(data.values)) as typeof data.values
  ).filter((r) => !part.find((p) => p.name === r.name));
  //if we want to ensure this value exists in the returned results
  if (selectedKey) {
    const pi = part.findIndex((r) => r.name === selectedKey);
    const ri = rest.findIndex((r) => r.name === selectedKey);
    if (pi === -1 && ri !== -1) {
      part.push(rest[ri]);
      rest.splice(ri, 1);
    }
  }

  const restTotal = sumArray(rest.map((s) => s.value));
  return { part, rest, restTotal };
};
