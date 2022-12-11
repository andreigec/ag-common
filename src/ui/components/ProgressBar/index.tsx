import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

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
  className?: string;
  /** if true, will transition to the end in X ms */
  transitionToMs?: number;
}

export const ProgressBar = (p: IProgressBar) => {
  const {
    transitionToMs = 200,
    frontColour = colours.notificationBlue,
    backColour = '#eee',
    dotPercentages = [25, 50, 75],
  } = p;

  const [barWidth, setBarWidth] = useState((p.min / p.max) * 100);
  useEffect(() => {
    const newbw = (p.min / p.max) * 100;
    if (barWidth !== newbw) {
      setBarWidth(newbw);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p.min, p.max]);

  useEffect(() => {
    if (transitionToMs) {
      setBarWidth(p.max);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Base
      style={{
        backgroundColor: backColour,
      }}
      className={p.className}
    >
      <Bar
        style={{
          width: `${barWidth}%`,
          backgroundColor: frontColour,
          transition: `width ${transitionToMs}ms linear`,
        }}
      />
      {dotPercentages?.map((v) => (
        <Dot
          key={v}
          style={{ left: `calc(${v}% - 0.25rem)` }}
          data-invert={v > barWidth}
        />
      ))}
    </Base>
  );
};
