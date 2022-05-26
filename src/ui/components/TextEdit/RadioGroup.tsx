/* eslint-disable jsx-a11y/no-onchange */
import { SaveIcon, UndoIcon } from './images';
import { IconD as Icon, iconLeft, iconRight, ValueBox } from './common';
import { FlexColumn } from '../FlexColumn';
import { noDrag } from '../../styles/common';
import { getRandomInt } from '../../../common/helpers/math';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const Label = styled.label``;

export const RadioGroup = ({
  defaultValue,
  onSubmit,
  values,
}: {
  defaultValue: string;
  onSubmit: (val: string) => void;
  values: string[];
}) => {
  const [name] = useState(getRandomInt(10000).toString());
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <ValueBox {...noDrag}>
      {values.map((v) => (
        <FlexColumn key={name + v}>
          <Label>{v}</Label>
          <input
            type="radio"
            key={v}
            value={v}
            name={name}
            checked={v === value}
            onChange={() => onSubmit(v)}
          />
        </FlexColumn>
      ))}
      {value !== defaultValue && (
        <Icon
          style={iconLeft}
          onClick={() => value !== defaultValue && onSubmit(value)}
        >
          <SaveIcon />
        </Icon>
      )}
      {value !== defaultValue && (
        <Icon style={iconRight} onClick={() => setValue(defaultValue)}>
          <UndoIcon />
        </Icon>
      )}
    </ValueBox>
  );
};
