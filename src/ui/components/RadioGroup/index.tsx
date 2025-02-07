'use client';
import styled from '@emotion/styled';
import type { CSSProperties } from 'react';
import type { JSX } from 'react';
import React, { useState } from 'react';

const Base = styled.div`
  display: flex;
  flex-flow: row;
  &[data-mode='vert'] {
    flex-flow: column;
  }
  overflow: hidden;
  justify-content: space-between;
`;

const Label = styled.label`
  text-align: center;
  display: flex;
  align-items: center;

  &[data-selected='true'] {
    cursor: default;
  }
  &[data-selected='false'] {
    cursor: pointer;
  }
`;

export interface IRadioGroup<T> {
  /**
   * can overload the render of the label. defaults to toString
   */
  renderLabel?: (a: T, selected: boolean) => JSX.Element;
  defaultIndex: number;
  onSubmit: (val: T, index: number) => void;
  values: T[];
  className?: string;
  style?: CSSProperties;
  /** default horiz */
  mode?: 'vert' | 'horiz';
}

export const RadioGroup = <T,>(p: IRadioGroup<T>) => {
  const { renderLabel = (x) => (x as any).toString() } = p;
  const [index, setIndex] = useState<number>(p.defaultIndex);

  return (
    <Base className={p.className} style={p.style} data-mode={p.mode ?? 'horiz'}>
      {p.values.map((v, i) => (
        <Label
          // eslint-disable-next-line react/no-array-index-key
          key={i.toString()}
          data-selected={index === i}
          onClick={() => {
            if (index === i) {
              return;
            }
            setIndex(i);
            p.onSubmit(v, i);
          }}
        >
          {renderLabel(v, index === i)}
        </Label>
      ))}
    </Base>
  );
};
