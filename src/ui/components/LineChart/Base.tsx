'use client';
import styled from '@emotion/styled';
import React from 'react';

import { distinctBy } from '../../../common';
import { rangePercentage } from '../../../common/helpers/math';
import { useTooltip } from '../../helpers/useTooltip';
import { timeLegendTitle, timeTooltipTitle } from './dateHelpers';
import { legendItemsKeys } from './getLegendItems';
import { interpolate } from './interpolate';
import { Legend } from './Legend';
import { TooltipContent } from './TooltipContent';
import type { ILineChart, ILineChartTooltip } from './types';

const Base = styled.div`
  width: calc(100% - 1px);
  height: calc(100% - 1px);
  padding: 0.5rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
`;

export const LineChart = (p: ILineChart) => {
  const UT = useTooltip<ILineChartTooltip>();

  const { points, xTime } = interpolate(p.data);

  let tt = p.tooltipTitle;
  if (!tt && xTime) {
    tt = timeTooltipTitle;
  }
  if (!tt) {
    tt = (s) => s.toString();
  }

  let lt = p.legendTitle;
  if (!lt && xTime) {
    lt = timeLegendTitle;
  }
  if (!lt) {
    lt = (s) => s.toString();
  }

  const legendItems = legendItemsKeys(p);

  return (
    <Base
      className={p.className}
      data-type="lcb"
      onMouseLeave={() => UT.setPos(undefined)}
    >
      <UT.Comp pos={UT.pos}>{(p) => <TooltipContent {...p} />}</UT.Comp>
      <svg
        //slight offset to show circles
        viewBox={`-1 -1 102 102`}
        transform="scale(-1,1) scale(-1,-1)"
        width="100%"
        height="100%"
        strokeWidth={'0.3%'}
        fillOpacity={1}
        preserveAspectRatio="none"
        onMouseMove={(element) => {
          const parent = element.currentTarget.closest("[data-type='lcb']");
          const bb = parent?.getBoundingClientRect();
          if (!bb) {
            return;
          }

          const relativeX =
            rangePercentage({
              value: element.pageX,
              min: bb.left,
              max: bb.left + bb.width,
            }) * 100;

          const selectedPoints: { x: number; y: number }[] = points
            .filter((p) => relativeX >= p.x1 && relativeX < p.x2)
            .map((a) => ({ x: a.origX, y: a.origY }));

          const selectedXs = distinctBy(
            p.data.filter(({ x, y }) =>
              selectedPoints.find((a) => a.x === x && a.y === y),
            ),
            (s) => JSON.stringify(s),
          );

          const td: ILineChartTooltip = {
            name: tt?.(selectedXs?.[0].x) ?? '',
            total: 1,
            values: selectedXs.map((a) => ({
              colour: p.colours[a.name],
              name: a.name,
              value: a.y,
            })),
            x: selectedXs?.[0].x,
          };

          UT.setPos({
            element,
            parent,
            data: td,
          });
        }}
      >
        {points.map((p2) => (
          <React.Fragment key={JSON.stringify(p2)}>
            {(p2.origX === UT.pos?.data.x || p2.x1 === p2.x2) && (
              <circle
                cx={p2.x2}
                cy={p2.y2}
                r={1}
                fill={p.colours[p2.name]}
              ></circle>
            )}
            {p2.x1 !== p2.x2 && (
              <line
                strokeOpacity={
                  legendItems.find((f) => f.name === p2.name) ? 1 : 0.3
                }
                x1={p2.x1}
                x2={p2.x2}
                y1={p2.y1}
                y2={p2.y2}
                style={{ stroke: p.colours[p2.name] }}
              />
            )}
          </React.Fragment>
        ))}
      </svg>
      <Legend
        colours={p.colours}
        data={p.data}
        tooltipTitle={tt}
        legendTitle={lt}
      />
    </Base>
  );
};
