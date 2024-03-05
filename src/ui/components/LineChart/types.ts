import type { IVarStyles } from '../../styles/common';

export type ILineChartItemRaw = {
  x: number;
  y: number;
  name: string;
};

export interface ILineChartState {
  selectedPoints?: {
    x: number;
    y: number;
  }[];
  selectedXs?: ILineChartItemRaw[];
}
export interface ILineChartTooltip extends ILineChartState {
  tt: (a: number) => string;
  lt: (a: number) => string;
  data: ILineChartItemRaw[];
  colours: Record<string, string>;
}

export interface ILineChart {
  data: ILineChartItemRaw[];
  className?: string;
  /** name -> colour */
  colours: Record<string, string>;
  tooltipTitle?: (a: number) => string;
  legendTitle?: (a: number) => string;
  style?: Partial<IVarStyles>;
}
