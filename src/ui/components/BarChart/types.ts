export interface IBarChartData {
  name: string;
  total: number;
  values: {
    name: string;
    value: number;
    colour: string;
  }[];
}
