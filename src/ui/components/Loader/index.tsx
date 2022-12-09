import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

const Base = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  animation: spin 2s linear infinite;
  padding: 2px;
  overflow: hidden;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8);
  opacity: 1;
  &[data-transparent='true'] {
    opacity: 0.1;
  }
  transition: opacity 5s;
`;

export interface ILoader {
  /**
   * default 2rem
   */
  width?: string | null;
  /**
   * default 2rem
   */
  height?: string | null;
  name: string;
}
export const Loader = ({ name, height = '2rem', width = '2rem' }: ILoader) => {
  const [trans, setTrans] = useState(true);
  useEffect(() => {
    setTrans(false);
  }, []);

  return (
    <LoadingBack data-loading={name} data-transparent={trans}>
      <Base style={{ height: height as string, width: width as string }} />
    </LoadingBack>
  );
};
