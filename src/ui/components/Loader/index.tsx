import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

const SLoader = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  animation: spin 2s linear infinite;
  padding: 2px;
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

export const Loader = ({ name }: { name: string }) => {
  const [trans, setTrans] = useState(true);
  useEffect(() => {
    setTrans(false);
  }, []);

  return (
    <LoadingBack data-loading={name} data-transparent={trans}>
      <SLoader />
    </LoadingBack>
  );
};
