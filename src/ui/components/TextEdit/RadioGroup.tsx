import { ValueBox } from './common';
import { FlexColumn } from '../FlexColumn';
import { noDrag } from '../../styles/common';
import { getRandomInt } from '../../../common/helpers/math';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const Label = styled.label``;

export const RadioGroup = <T,>({
  defaultValue,
  onSubmit,
  values,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderLabel = (e: T) => (e as any).toString(),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderValue = (e: T) => (e as any).toString(),
}: {
  /**
   * can overload the render of the label. defaults to toString
   */
  renderLabel?: (a: T) => string;
  /**
   * render the value from the generic T. defaults to toString
   */
  renderValue?: (a: T) => string;
  defaultValue: T;
  onSubmit: (val: T) => void;
  values: T[];
}) => {
  const [name] = useState(getRandomInt(10000).toString());
  const [value, setValue] = useState(renderValue(defaultValue));
  useEffect(() => {
    const rv = renderValue(defaultValue);
    if (value !== rv) {
      setValue(rv);
    }
  }, [defaultValue, renderValue, value]);

  return (
    <ValueBox {...noDrag}>
      {values.map((v) => (
        <FlexColumn key={name + v}>
          <Label>{renderLabel(v)}</Label>
          <input
            type="radio"
            key={renderValue(v)}
            value={renderValue(v)}
            name={name}
            checked={renderValue(v) === value}
            onChange={() => onSubmit(v)}
          />
        </FlexColumn>
      ))}
    </ValueBox>
  );
};
