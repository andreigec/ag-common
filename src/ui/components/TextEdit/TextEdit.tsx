/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect, useRef } from 'react';
import { SaveIcon, UndoIcon, PencilIcon } from './images';
import { iconLeft, iconRight, ValueBox, valueCss } from './common';
import styled, { css, StyledComponent } from 'styled-components';
import { useOnClickOutside } from '../../helpers/useOnClickOutside';
import { noDrag } from '../../styles/common';

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
}: {
  /**
   * forces single row input style. will also enable 'Enter' to auto submit
   */
  singleLine?: boolean;
  className?: string;
  /**
   * default value of field. default empty
   */
  defaultValue?: string;
  /**
   * if truthy will enable text edit mode by default. if focus is true, will also focus on open
   */
  defaultEditing?: { focus?: boolean };
  onSubmit: (
    val: string,
    /**
     * if true, was passed by pressing Enter
     */
    enterPressed: boolean,
  ) => void;
  /**
   * disable edit text functionality
   */
  disableEdit?: boolean;
  placeholder?: string;
  onEditingChange?: (editing: boolean) => void;
  onClickOutsideWithNoValue?: () => void;
  onClickNotEditing?: () => void;
  /**
   * if true, will not grow. default false
   */
  noGrow?: boolean;
  /**
   * will set these attributes directly on element. can put data-* here
   */
  attributes?: Record<string, string | number | boolean>;
  /**
   * optional content at the left of the box
   */
  leftContent?: JSX.Element;
  /**
   * if true, will add undo button after changes. if false, will submit after every keypress. default true
   */
  allowUndo?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const taref = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState(defaultValue);
  const [editing, setEditingRaw] = useState(!!defaultEditing);
  const valueChange = value !== defaultValue;
  useOnClickOutside({ ref, moveMouseOutside: false }, () => {
    if (valueChange) {
      onSubmit(value, false);
    } else {
      if (!disableEdit && editing && defaultEditing) {
        return;
      }

      if (onClickOutsideWithNoValue) {
        onClickOutsideWithNoValue();
      }

      setEditingRaw(false);
    }
  });

  const setEditing = (b: boolean) => {
    setEditingRaw(b);
    if (onEditingChange) {
      onEditingChange(b);
    }
  };

  useEffect(() => {
    setValue(defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  useEffect(() => {
    if (defaultEditing?.focus && taref.current) {
      taref.current.focus();
    }

    setEditing(!!defaultEditing);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultEditing]);

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
        <ValueReadonly data-type="text">{value}</ValueReadonly>
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
      tabIndex={editing ? 0 : undefined}
      data-nogrow={noGrow}
      {...attributes}
    >
      {leftContent || null}
      <Comp
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
        onKeyDown={(e) =>
          singleLine &&
          e.code.endsWith('Enter') &&
          onSubmit(value, true) &&
          false
        }
      />
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
