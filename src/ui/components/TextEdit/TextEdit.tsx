'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { filterDataProps } from '../../helpers/dom';
import { useOnClickOutside } from '../../helpers/useOnClickOutside';
import { Pencil } from '../../icons/Pencil';
import { Save } from '../../icons/Save';
import { Undo } from '../../icons/Undo';
import { noDrag } from '../../styles/common';
import { iconLeft, iconRight, ValueBox, valueCss } from './common';
import { TextEditLengthBox } from './LengthBox';
import type { IRefTextEdit, ITextEdit } from './types';

export const ValueReadonly = styled.div`
  ${valueCss};
  word-break: break-word;
  flex-basis: calc(100% - 3rem);
`;
const basecss = css`
  outline: none;
  border: 0;
  word-break: break-word;
  ${valueCss};
  resize: none;
  overflow: hidden;
  background-color: white;
  color: black;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  &::placeholder {
    color: #bbb;
  }
`;

const ValueTextArea = styled.textarea`
  ${basecss}
  &[data-editing='true'] {
    min-height: 5rem;
  }
`;

const ValueTextBox = styled.input`
  ${basecss};
`;

const ValueBoxEdit = styled(ValueBox)`
  border: solid 1px #ccc;
`;

const Right = styled.div`
  display: flex;
  flex-flow: row;
  align-content: center;
  &[data-singleline='false'] {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
  }
`;

const Icon = styled.div`
  width: 1.5rem;
  display: flex;
  cursor: pointer;
  &:hover {
    filter: saturate(3);
  }
`;

export const TextEdit = forwardRef<IRefTextEdit, ITextEdit>((p, ref) => {
  const {
    defaultValue = '',
    defaultEditing,
    disableEdit = false,
    singleLine = false,
    noGrow = false,
    allowUndo = true,
  } = p;

  const divRef = useRef<HTMLDivElement>(null);
  const taref = useRef<HTMLTextAreaElement | HTMLInputElement>(null);
  const [value, setValue] = useState(defaultValue);
  const [editing, setEditingRaw] = useState(!!defaultEditing);
  const valueChange = value !== defaultValue;
  useImperativeHandle(ref, () => ({
    setValue: (v) => {
      if (v === value) {
        return;
      }
      setValue(v);
    },
    focus: () => taref.current?.focus(),
    getValue: () => taref.current?.value,
  }));

  useOnClickOutside(
    {
      disabled: p.onClickOutsideWithNoValue === null || disableEdit,
      ref: divRef,
      moveMouseOutside: false,
    },
    () => {
      if (valueChange) {
        p.onSubmit(value, false);
        return;
      }

      if (!disableEdit && p.onClickOutsideWithNoValue) {
        p.onClickOutsideWithNoValue();
      }

      if (!disableEdit && editing && defaultEditing) {
        return;
      }

      if (editing) {
        setEditingRaw(false);
      }
    },
  );

  const setEditing = useCallback(
    (b: boolean) => {
      setEditingRaw(b);
      if (p.onEditingChange) {
        p.onEditingChange(b);
      }
    },
    [p],
  );

  useEffect(() => {
    if (defaultEditing?.focus && taref.current) {
      taref.current.focus();
    }
  }, [defaultEditing?.focus]);

  if (!editing || disableEdit) {
    return (
      <ValueBox
        {...noDrag}
        className={p.className}
        data-editing="false"
        onClick={() => p.onClickNotEditing?.()}
        data-pointer={p.onClickNotEditing ? 'true' : 'false'}
        data-nogrow={noGrow}
        {...filterDataProps(p)}
      >
        {p.leftContent ?? null}
        <ValueReadonly data-type="text">
          {value || <span style={{ color: '#ccc' }}>{p.placeholder}</span>}
        </ValueReadonly>
        <Right>
          {!disableEdit && (
            <Icon
              style={iconRight}
              onClick={(e) => {
                e.stopPropagation();
                setEditing(true);
              }}
            >
              <Pencil />
            </Icon>
          )}
        </Right>
      </ValueBox>
    );
  }

  const Comp = !singleLine ? ValueTextArea : ValueTextBox;

  return (
    <ValueBoxEdit
      {...noDrag}
      className={p.className}
      data-editing="true"
      ref={ref as any}
      tabIndex={-1}
      data-nogrow={noGrow}
      {...filterDataProps(p)}
    >
      {p.leftContent ?? null}
      <Comp
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        tabIndex={editing ? 0 : undefined}
        data-editing="true"
        data-valuechange={valueChange.toString()}
        ref={taref as any}
        data-type="text"
        value={value}
        onChange={(v) => {
          setValue(v.currentTarget.value);
          if (!allowUndo) {
            p.onSubmit(v.currentTarget.value, false);
          }
        }}
        placeholder={p.placeholder}
        rows={singleLine ? 1 : undefined}
        maxLength={p.maxLength}
        onKeyDown={(e: any) => {
          if (p.onKeyDown?.(e) === false) {
            e.preventDefault();
            return;
          }

          if (singleLine && e.code.endsWith('Enter')) {
            p.onSubmit(value, true);
          }
        }}
      />

      {p.maxLength && (
        <Right data-singleline={singleLine}>
          <TextEditLengthBox min={value.length} max={p.maxLength} />
        </Right>
      )}
      {allowUndo && (
        <Right>
          {valueChange && (
            <Icon style={iconLeft} onClick={() => p.onSubmit(value, false)}>
              <Save />
            </Icon>
          )}
          {(valueChange || editing !== !!defaultEditing) && (
            <Icon
              style={{ ...iconRight, fill: '#134563' }}
              onClick={() => {
                setEditing(!!defaultEditing);
                setValue(defaultValue);
              }}
            >
              <Undo />
            </Icon>
          )}
        </Right>
      )}
    </ValueBoxEdit>
  );
});
