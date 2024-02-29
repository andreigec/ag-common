export type ILineChartItemRaw = {
  x: number;
  y: number;
  name: string;
};

export interface ILineChartTooltip {
  name: string;
  total: number;
  x?: number;
  values: {
    name: string;
    value: number;
    colour: string;
  }[];
}

export interface ILineChart {
  data: ILineChartItemRaw[];
  className?: string;
  /** name -> colour */
  colours: Record<string, string>;
  tooltipTitle?: (a: number) => string;
  legendTitle?: (a: number) => string;
}
