import styled from '@emotion/styled';
import React from 'react';

const Base = styled.div`
  /* position: absolute;
  bottom: 0.5rem;
  right: 0.5rem; */
`;

export const TextEditLengthBox = ({
  min,
  max,
}: {
  min: number;
  max: number;
}) => {
  let color = 'black';
  if (min / max > 0.55) {
    color = 'indianred';
  }

  if (min === max) {
    color = 'red';
  }
  return (
    <Base style={{ color }}>
      {min}/{max}
    </Base>
  );
};
