import styled from '@emotion/styled';
import React from 'react';

import { useTooltip } from '../../helpers/useTooltip';
import { getVarStyles, type IVarStyles } from '../../styles/common';
import { Item } from './Item';
import { Legend } from './Legend';
import { TooltipContent } from './TooltipContent';
import type { IBarChartData } from './types';

const BarChartBase = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  margin-top: 0.5rem;
  position: relative;
`;

const ItemStyled = styled(Item)`
  margin-bottom: 0.75rem;
  height: auto;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const BarChart = ({
  data: dataRaw,
  style: sRaw,
  className,
}: {
  data: IBarChartData[];
  style?: Partial<IVarStyles>;
  className?: string;
}) => {
  const style = getVarStyles(sRaw);
  const UT = useTooltip<{ selectedKey?: string; data: IBarChartData }>();

  const maxWidth = Math.max(...dataRaw.map((a) => a.total));

  return (
    <BarChartBase data-type="bcb" style={style} className={className}>
      <UT.Comp pos={UT.pos}>
        {({ data }) => <TooltipContent {...data} style={style} />}
      </UT.Comp>
      {dataRaw.map((data) => (
        <ItemStyled
          style={style}
          key={data.name}
          data={data}
          maxWidth={maxWidth}
          onMouseLeave={() => UT.setPos(undefined)}
          onMouseMove={(element) => {
            const selectedKey =
              document
                .elementFromPoint(element.pageX, element.pageY)
                ?.getAttribute('data-barchartitem-key') ?? '';
            UT.setPos({
              element,
              parent: element.currentTarget.closest("[data-type='bcb']"),
              data: { selectedKey, data },
            });
          }}
        />
      ))}
      <Legend data={dataRaw} maxWidth={maxWidth} style={style} />
    </BarChartBase>
  );
};
