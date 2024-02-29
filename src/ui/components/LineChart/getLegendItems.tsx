import { take } from '../../../common/helpers/array';
import { sumArray } from '../../../common/helpers/math';

export const getLegendItems = ({
  data,
}: {
  data: {
    total: number;
    values: { value: number; colour: string; name: string }[];
  };
}) => {
  const min = data.total * 0.1;
  const shownResults = 4;

  let part = data.values.sort((a, b) => (a.value < b.value ? 1 : -1));
  let rest: {
    value: number;
    colour: string;
    name: string;
  }[] = [];
  if (part.length > shownResults) {
    part = take(
      part.filter((r) => r.value > min),
      shownResults,
    ).part;
    rest = (
      JSON.parse(JSON.stringify(data.values)) as typeof data.values
    ).filter((r) => !part.find((p) => p.name === r.name));
  }

  const restTotal = sumArray(rest.map((s) => s.value));
  return { part, rest, restTotal };
};
