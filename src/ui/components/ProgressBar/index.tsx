import styled from '@emotion/styled';
import React from 'react';

import { colours } from '../../styles';

const Base = styled.div`
  position: relative;
  min-width: 5rem;
  width: 100%;
  height: 2rem;
  border-radius: 1rem;
  overflow: hidden;
`;

const Bar = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  transition: width 0.2s ease;
`;

const Dot = styled.div`
  position: absolute;
  top: calc(50% - 0.25rem);
  width: 0.5rem;
  height: 0.5rem;
  background-color: #aaa;
  z-index: 1;
  border-radius: 50%;
  &[data-invert='true'] {
    background-color: #333;
  }
`;

export interface IProgressBar {
  min: number;
  max: number;
  /** default #4d76ff */
  frontColour?: string;
  /** default #eee */
  backColour?: string;
  /** default 25,50,75 */
  dotPercentages?: number[] | null;
}
export const ProgressBar = (p: IProgressBar) => {
  const {
    min,
    max,
    frontColour = colours.notificationBlue,
    backColour = '#eee',
    dotPercentages = [25, 50, 75],
  } = p;

  const barWidth = (min / max) * 100;

  return (
    <Base style={{ backgroundColor: backColour }}>
      <Bar
        style={{
          width: `${barWidth}%`,
          backgroundColor: frontColour,
        }}
      />
      {dotPercentages?.map &&
        dotPercentages.map((v) => {
          return (
            <Dot
              key={v}
              style={{ left: `calc(${v}% - 0.25rem)` }}
              data-invert={v > barWidth}
            />
          );
        })}
    </Base>
  );
};
