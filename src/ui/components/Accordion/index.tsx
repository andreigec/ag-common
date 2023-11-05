'use client';
import styled from '@emotion/styled';
import React, { useState } from 'react';

import { Chevron } from '../Chevron';

const SBase = styled.div``;
const SSubTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin-right: 0.5rem;
`;

const SRollUpRow = styled.div`
  display: flex;
  cursor: pointer;
`;
export interface IAccordion {
  children: string | React.ReactNode;
  title: string;
  /** controlled component if provided */
  open?: boolean;
  /** called when openness changes */
  setOpen?: (open: boolean) => void;
  chevronColour?: string;
  className?: string;
}

export const Accordion = ({
  title,
  children,
  open,
  setOpen,
  chevronColour = 'white',
  className,
}: IAccordion) => {
  const [openSt, setOpenSt] = useState(false);
  const controlled = open !== undefined;

  return (
    <SBase className={className}>
      <SRollUpRow
        onClick={() => {
          setOpen?.(controlled ? !open : !openSt);
          if (!controlled) {
            setOpenSt(!openSt);
          }
        }}
      >
        <SSubTitle>{title}</SSubTitle>
        <Chevron point={openSt ? 'up' : 'down'} colour={chevronColour} />
      </SRollUpRow>

      {(controlled ? open : openSt) && children}
    </SBase>
  );
};
