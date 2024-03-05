import styled from '@emotion/styled';
import type { MouseEventHandler } from 'react';
import React from 'react';

import type { IVarStyles } from '../../styles';
import { HardOutlineFilter } from '../../styles';
import type { IBarChartData } from './types';

const Base = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  height: 100%;
  cursor: default;
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  left: 0.25rem;
`;

export const Item = ({
  data,
  className,
  onMouseMove,
  onMouseLeave,
  maxWidth,
  style,
}: {
  data: IBarChartData;
  className?: string;
  onMouseMove?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
  maxWidth: number;
  style: IVarStyles;
}) => (
  <Base
    className={className}
    onMouseMove={onMouseMove}
    onMouseLeave={onMouseLeave}
    style={style}
  >
    <Title
      style={{
        color: style.color,
        filter: HardOutlineFilter(style.backgroundColor),
      }}
    >
      {data.name}
    </Title>
    {data.values.map((v) => (
      <div
        data-barchartitem-key={v.name}
        key={v.name}
        style={{
          height: '100%',
          width: `${(v.value / maxWidth) * 100}%`,
          backgroundColor: v.colour,
        }}
      >
        &nbsp;
      </div>
    ))}
    <div
      style={{
        height: '100%',
        flexGrow: 1,
        backgroundColor: 'transparent',
      }}
    >
      &nbsp;
    </div>
  </Base>
);
