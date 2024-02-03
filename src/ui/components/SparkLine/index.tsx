'use client';
import styled from '@emotion/styled';
import React from 'react';

import { distinctBy } from '../../../common';
import { rangePercentage } from '../../../common/helpers/math';

const barWidth = 2;
const Base = styled.div`
  width: calc(100% - 1px);
  height: calc(100% - 1px);
  border: solid 1px #666;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
`;

const Points = styled.div`
  position: relative;
  width: calc(100% - ${barWidth}px);
  height: calc(100% - ${barWidth}px);
  margin-left: ${barWidth}px;
`;

const Point = styled.div`
  position: absolute;
  width: ${barWidth}px;
`;

export interface ISparkLine {
  /**
   * default #4d76ff
   */
  pointColour?: string;
  className?: string;
  data: TSparkLineData[];
  pointTitleF?: (p: TSparkLineData) => string;
  title?: string;
}
export type TSparkLineData = { x: number; y: number };
export const SparkLine = (p: ISparkLine) => {
  const { data: raw, pointColour = '#4d76ff' } = p;
  const xMin = Math.min(...raw.map((d) => d.x));
  const xMax = Math.max(...raw.map((d) => d.x));
  const yMin = Math.min(...raw.map((d) => d.y));
  const yMax = Math.max(...raw.map((d) => d.y));
  const data = distinctBy(
    raw.map((orig) => ({
      x:
        rangePercentage({
          value: orig.x,
          min: xMin,
          max: xMax,
        }) * 100,
      y:
        rangePercentage({
          value: orig.y,
          min: yMin,
          max: yMax,
        }) * 100,
      orig,
    })),
    (s) => s.x,
  );

  return (
    <Base className={p.className} title={p.title}>
      <Points>
        {data.map((pt) => (
          <Point
            title={p.pointTitleF?.(pt.orig) ?? ''}
            key={pt.x + ' ' + pt.y}
            style={{
              backgroundColor: pointColour,
              borderColor: pointColour,
              left: `calc(${pt.x}% - ${barWidth}px)`,
              bottom: 0,
              height: `calc(${pt.y}% + ${barWidth}px)`,
            }}
          />
        ))}
      </Points>
    </Base>
  );
};
