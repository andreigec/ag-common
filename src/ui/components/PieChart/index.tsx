import styled from '@emotion/styled';
import React from 'react';

export interface IPieChartData {
  label: string;
  value: number;
  color: string;
}
export interface IPieChart {
  data: IPieChartData[];
  className?: string;
}

const Base = styled.div`
  width: 100%;
  height: 100%;
`;

export const PieChart: React.FC<IPieChart> = ({ data, className }) => {
  const total = data.reduce((sum, { value }) => sum + value, 0);
  const width = 500;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 2;
  let cumulativeAngle = 0;

  return (
    <Base className={className}>
      <svg viewBox={`0 0 ${width} ${height}`}>
        {data.map(({ label, value, color }) => {
          const angle = (value / total) * 360;
          const startX =
            centerX + radius * Math.cos((cumulativeAngle * Math.PI) / 180);

          const startY =
            centerY + radius * Math.sin((cumulativeAngle * Math.PI) / 180);

          const endX =
            centerX +
            radius * Math.cos(((cumulativeAngle + angle) * Math.PI) / 180);

          const endY =
            centerY +
            radius * Math.sin(((cumulativeAngle + angle) * Math.PI) / 180);

          const largeArcFlag = angle > 180 ? 1 : 0;
          const midAngle = cumulativeAngle + angle / 2;
          const midX =
            centerX + radius * 0.75 * Math.cos((midAngle * Math.PI) / 180);

          const midY =
            centerY + radius * 0.75 * Math.sin((midAngle * Math.PI) / 180);

          cumulativeAngle += angle;

          return (
            <g key={label}>
              <title>{`${label}: ${value}`}</title>
              <path
                d={`M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} L ${centerX} ${centerY} Z`}
                fill={color}
              />
              <text
                x={midX}
                y={midY}
                textAnchor="middle"
                alignmentBaseline="middle"
                stroke="white"
                strokeWidth={'3px'}
              >
                {label}
              </text>
              <text
                x={midX}
                y={midY}
                textAnchor="middle"
                alignmentBaseline="middle"
                fill="black"
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>
    </Base>
  );
};
