import styled from '@emotion/styled';
import React from 'react';

import { useTooltip } from '../../helpers/useTooltip';
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
  background-color: var(--main-bg);
`;

const ItemStyled = styled(Item)`
  margin-bottom: 0.75rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const BarChart = ({ data }: { data: IBarChartData[] }) => {
  const UT = useTooltip<IBarChartData & { key: string }>();

  const maxWidth = Math.max(...data.map((a) => a.total));

  return (
    <BarChartBase data-type="bcb">
      <UT.Comp pos={UT.pos}>{(data) => <TooltipContent data={data} />}</UT.Comp>
      {data.map((data) => (
        <ItemStyled
          key={data.name}
          data={data}
          maxWidth={maxWidth}
          onMouseLeave={() => UT.setPos(undefined)}
          onMouseMove={(element) => {
            const key =
              document
                .elementFromPoint(element.pageX, element.pageY)
                ?.getAttribute('data-key') ?? '';
            UT.setPos({
              element,
              parent: element.currentTarget.closest("[data-type='bcb']"),
              data: { ...data, key },
            });
          }}
        />
      ))}
      <Legend data={data} maxWidth={maxWidth} />
    </BarChartBase>
  );
};
