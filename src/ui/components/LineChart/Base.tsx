'use client';
import styled from '@emotion/styled';
import React from 'react';

import { distinctBy } from '../../../common/helpers/array';
import { rangePercentage } from '../../../common/helpers/math';
import { useTooltip } from '../../helpers/useTooltip';
import { timeLegendTitle, timeTooltipTitle } from './dateHelpers';
import { getLegendItems } from './getLegendItems';
import { interpolate } from './interpolate';
import { Legend } from './Legend';
import { TooltipContent } from './TooltipContent';
import type { ILineChart, ILineChartState } from './types';

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
  const UT = useTooltip<ILineChartState>();

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

  const lt2 = lt as (a: number) => string;

  const tt2 = tt as (a: number) => string;

  const legendItems = getLegendItems({
    colours: p.colours,
    data: p.data,
    tt: tt2,
    lt: lt2,
    ...UT.pos?.data,
    fixed: false,
  });
  return (
    <Base
      className={p.className}
      data-type="lcb"
      onMouseLeave={() => UT.setPos(undefined)}
    >
      <UT.Comp pos={UT.pos}>
        {(p2) => (
          <TooltipContent
            {...p2}
            colours={p.colours}
            data={p.data}
            lt={lt2}
            tt={tt2}
            legendItems={legendItems}
          />
        )}
      </UT.Comp>
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

          let selectedPoints = points.filter(
            (p) => relativeX >= p.x1 && relativeX < p.x2,
          );

          //if there are just single dots on the graph, choose the ones that are closest (share the smallest gap distance)
          if (selectedPoints.length === 0) {
            const sp1 = points
              .map((p) => ({
                ...p,
                gap: Math.abs(p.x1 - relativeX),
              }))
              .sort((a, b) => (a.gap < b.gap ? -1 : 1));
            const mingap = sp1?.[0].gap;
            selectedPoints = sp1.filter((r) => r.gap === mingap);
          }
          const selectedXs = distinctBy(
            p.data.filter(({ x, y }) =>
              selectedPoints?.find((a) => a.origX === x && a.origY === y),
            ),
            (s) => JSON.stringify(s),
          );
          UT.setPos({
            element,
            parent,
            data: {
              selectedPoints: selectedPoints.map((a) => ({
                x: a.origX,
                y: a.origY,
              })),
              selectedXs,
            },
          });
        }}
      >
        {points.map((p2) => (
          <React.Fragment key={JSON.stringify(p2)}>
            {(p2.origX === UT.pos?.data.selectedXs?.[0]?.x ||
              p2.x1 === p2.x2) && (
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
                  legendItems.part.find((f) => f.name === p2.name) ? 1 : 0.3
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
      <Legend data={p.data} colours={p.colours} lt={lt} tt={tt} />
    </Base>
  );
};
