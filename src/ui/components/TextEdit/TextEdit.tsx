import { SaveIcon, UndoIcon, PencilIcon } from './images';
import { iconLeft, iconRight, ValueBox, valueCss } from './common';
import { ITextEdit } from './types';
import { TextEditLengthBox } from './LengthBox';
import { useOnClickOutside } from '../../helpers/useOnClickOutside';
import { noDrag } from '../../styles/common';
import styled, { css, StyledComponent } from 'styled-components';
import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  ${basecss}
`;

const ValueBoxEdit = styled(ValueBox)`
  border: solid 1px #ccc;
`;

const Right = styled.div`
  display: flex;
  flex-flow: row;
  align-content: center;
  &[data-singleLine='false'] {
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

export const TextEdit = ({
  defaultValue = '',
  defaultEditing,
  disableEdit = false,
  placeholder,
  className,
  singleLine = false,
  noGrow = false,
  attributes,
  leftContent,

  onSubmit,
  onEditingChange,
  onClickOutsideWithNoValue,
  onClickNotEditing,
  allowUndo = true,
  onEscape,
  maxLength,
  onKeyDown,
}: ITextEdit) => {
  const ref = useRef<HTMLDivElement>(null);
  const taref = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState(defaultValue);
  const [editing, setEditingRaw] = useState(!!defaultEditing);
  const valueChange = value !== defaultValue;
  useOnClickOutside(
    {
      disabled: onClickOutsideWithNoValue === null || disableEdit,
      ref,
      moveMouseOutside: false,
    },
    () => {
      if (valueChange) {
        onSubmit(value, false);
      } else {
        if (!disableEdit && onClickOutsideWithNoValue) {
          onClickOutsideWithNoValue();
        }

        if (!disableEdit && editing && defaultEditing) {
          return;
        }

        if (editing) {
          setEditingRaw(false);
        }
      }
    },
  );

  const setEditing = useCallback(
    (b: boolean) => {
      setEditingRaw(b);
      if (onEditingChange) {
        onEditingChange(b);
      }
    },
    [onEditingChange],
  );

  useEffect(() => {
    setValue(defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  useEffect(() => {
    if (defaultEditing?.focus && taref.current) {
      taref.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!editing || disableEdit) {
    return (
      <ValueBox
        {...noDrag}
        className={className}
        data-editing="false"
        onClick={() => onClickNotEditing?.()}
        data-pointer={onClickNotEditing ? 'true' : 'false'}
        data-nogrow={noGrow}
        {...attributes}
      >
        {leftContent || null}
        <ValueReadonly data-type="text">
          {value || <span style={{ color: '#ccc' }}>{placeholder}</span>}
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
              <PencilIcon />
            </Icon>
          )}
        </Right>
      </ValueBox>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp: StyledComponent<'textarea', any> = singleLine
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (ValueTextBox as any)
    : ValueTextArea;

  return (
    <ValueBoxEdit
      {...noDrag}
      className={className}
      data-editing="true"
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      tabIndex={-1}
      data-nogrow={noGrow}
      {...attributes}
    >
      {leftContent || null}
      <Comp
        tabIndex={editing ? 0 : undefined}
        data-editing="true"
        data-valuechange={valueChange.toString()}
        ref={taref}
        data-type="text"
        value={value}
        onChange={(v) => {
          setValue(v.currentTarget.value);
          if (!allowUndo) {
            onSubmit(v.currentTarget.value, false);
          }
        }}
        placeholder={placeholder}
        rows={singleLine ? 1 : undefined}
        maxLength={maxLength}
        onKeyDown={(e) => {
          if (onKeyDown?.(e) === false) {
            e.preventDefault();
            return;
          }

          if (singleLine && e.code.endsWith('Enter')) {
            onSubmit(value, true);
          }

          if (onEscape && e.code.endsWith('Escape')) {
            onEscape();
          }
        }}
      />

      {maxLength && (
        <Right data-singleLine={singleLine}>
          <TextEditLengthBox min={value.length} max={maxLength} />
        </Right>
      )}
      {allowUndo && (
        <Right>
          {valueChange && (
            <Icon
              style={iconLeft}
              onClick={() => valueChange && onSubmit(value, false)}
            >
              <SaveIcon />
            </Icon>
          )}
          {(valueChange || editing !== !!defaultEditing) && (
            <Icon
              style={iconRight}
              onClick={() => {
                setEditing(!!defaultEditing);
                setValue(defaultValue);
              }}
            >
              <UndoIcon />
            </Icon>
          )}
        </Right>
      )}
    </ValueBoxEdit>
  );
};
