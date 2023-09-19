'use client';
import styled from '@emotion/styled';
import React from 'react';

import { rangePercentage } from '../../../common/helpers/math';

const Base = styled.div`
  width: calc(100% - 2px - 1rem);
  height: 100%;
  border: solid 1px #666;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const Points = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

const Point = styled.div`
  position: absolute;
  border-width: 2px;
  border-style: solid;
  width: 1px;
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
  const data = raw.map((orig) => ({
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
  }));

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
              left: pt.x + '%',
              bottom: 0,
              height: pt.y + '%',
            }}
          />
        ))}
      </Points>
    </Base>
  );
};
