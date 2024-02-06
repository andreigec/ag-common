import styled from '@emotion/styled';
import type { CSSProperties } from 'react';
import React from 'react';

const CP = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  &:before {
    content: '';
    position: relative;
    display: block;
    width: 150%;
    height: 150%;
    aspect-ratio: 4/3;
    box-sizing: border-box;
    border-radius: 45px;
    background-color: var(--var-bg-col);
    animation: pulse-ring 1s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  }

  @keyframes pulse-ring {
    0% {
      transform: scale(0.33);
    }
    80%,
    100% {
      opacity: 0;
    }
  }

  @keyframes pulse-dot {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
`;

const Text = styled.div`
  position: absolute;
  z-index: 1;
  background-color: var(--var-bg-col);
  border-radius: 15px;
  box-shadow: 0 0 8px var(--var-bg-col);
  min-width: 1rem;
  min-height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
`;
export const PulseRing = ({
  style,
  className,
  text,
  title,
}: {
  /** tooltip text */
  title?: string;
  /** bubble text */
  text?: string;
  className?: string;
  style?: CSSProperties & {
    /** default 2.5rem */
    width?: string;
    /** default 2.5rem */
    height?: string;
    /** colour of pulse. default #01a4e9 */
    backgroundColor?: string;
    /** colour of tex. default #000 */
    color?: string;
  };
}) => {
  const st: CSSProperties & {
    //pulse color
    '--var-bg-col': string;
  } = {
    ...style,
    width: style?.width ?? '2rem',
    height: style?.height ?? '2rem',
    color: 'transparent',
    backgroundColor: 'transparent',
    '--var-bg-col': style?.backgroundColor ?? '#01a4e9',
  };
  return (
    <CP style={st} className={className} title={title}>
      <Text
        style={{
          color: style?.color ?? 'black',
          aspectRatio: '1/1',
          minWidth: '1.5ch',
          minHeight: '1.5ch',
        }}
      >
        {text}
      </Text>
    </CP>
  );
};
