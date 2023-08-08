import styled from '@emotion/styled';
import type { FC } from 'react';
import React from 'react';

const Base = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  svg {
    overflow: initial;
  }
`;
export interface ITimelineChartSeries {
  data: {
    x: number;
    y: number;
  }[];
  /** shown on page */
  label?: string;
  key: string;
  color: string;
  /** optional onclick href */
  onClick?: () => void;
  /** hover text */
  title?: string;
}

export interface ITimelineChart {
  series: ITimelineChartSeries[];
  strokeWidth?: number;
  className?: string;
}

export const TimelineChart: FC<ITimelineChart> = ({
  series,
  strokeWidth = 3,
  className,
}) => {
  if (series.length === 0) {
    return <Base />;
  }

  const width = 600;
  const height = 200;
  const xValues = series.flatMap((s) => s.data.map((d) => d.x));
  const yValues = series.flatMap((s) => s.data.map((d) => d.y));
  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);
  const xScale = (x: number): number =>
    Math.ceil(width * ((x - xMin) / (xMax - xMin))) ?? 0;

  const yScale = (y: number): number => {
    let ret = Math.ceil(height * ((yMax - y) / (yMax - yMin)));
    if (isNaN(ret)) {
      ret = y;
    }
    return ret ?? y;
  };

  const getPathData = ({ data }: ITimelineChartSeries): string => {
    const pd1 = data
      .sort((a, b) => (a.x < b.x ? -1 : 1))
      .map(({ x, y }) => {
        const xScaled = xScale(x);
        const yScaled = yScale(y);

        return { xScaled, yScaled };
      });

    const pathData = pd1.map(({ xScaled, yScaled }, i) =>
      i === 0 ? `M${xScaled} ${yScaled}` : ` L${xScaled} ${yScaled}`,
    );

    return pathData.join('\n');
  };

  return (
    <Base className={className}>
      <svg viewBox={`0 -10 ${width} ${height + 20}`}>
        {series.map(({ color, data, label, key, onClick, title }) => (
          <g key={key}>
            <title>{title || label}</title>
            <path
              d={getPathData({ color, data, label, key })}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              onClick={() => onClick?.()}
              style={{ cursor: onClick ? 'pointer' : 'default' }}
            />
            {label && (
              <>
                <text
                  x={xScale(data?.[0]?.x) + strokeWidth * 2}
                  y={yScale(data[data.length - 1]?.y)}
                  fontSize="12"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  stroke="white"
                  strokeWidth={'3px'}
                >
                  {label}
                </text>

                <text
                  x={xScale(data?.[0]?.x) + strokeWidth * 2}
                  y={yScale(data[data.length - 1]?.y)}
                  fontSize="12"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="black"
                >
                  {label}
                </text>
              </>
            )}
          </g>
        ))}
      </svg>
    </Base>
  );
};
