/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect, useRef } from 'react';
import { SaveIcon, UndoIcon, PencilIcon } from './images';
import { iconLeft, iconRight, ValueBox, valueCss } from './common';
import styled from 'styled-components';
import { useOnClickOutside } from '../../helpers/useOnClickOutside';
import { noDrag } from '../../styles/common';

export const ValueReadonly = styled.div`
  ${valueCss};
  word-break: break-word;
  flex-basis: calc(100% - 3rem);
`;
const ValueTextArea = styled.textarea`
  border: 0;
  word-break: break-word;
  ${valueCss};
  resize: none;
  overflow: hidden;
  background-color: white;
  &[data-editing='true'] {
    min-height: 5rem;
  }
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
  cursor: pointer;
  &:hover {
    filter: saturate(3);
  }
`;

export const TextEdit = ({
  defaultValue,
  defaultEditing = false,
  onSubmit,
  canEdit = true,
  placeholder,
  onEditingChange,
  onClickOutsideWithNoValue,
  onClickNotEditing,
  className,
  singleLine = false,
}: {
  singleLine?: boolean;
  className?: string;
  defaultValue: string;
  defaultEditing?: boolean;
  onSubmit: (val: string) => void;
  canEdit?: boolean;
  placeholder?: string;
  onEditingChange?: (editing: boolean) => void;
  onClickOutsideWithNoValue?: () => void;
  onClickNotEditing?: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const taref = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState(defaultValue);
  const [editing, setEditingRaw] = useState(defaultEditing);
  const valueChange = value !== defaultValue;
  useOnClickOutside({ ref, moveMouseOutside: false }, () => {
    if (valueChange) {
      onSubmit(value);
    } else {
      if (canEdit && editing && defaultEditing) {
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
    //setEditing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  useEffect(() => {
    if (defaultEditing && taref.current) {
      taref.current.focus();
    }

    setEditing(defaultEditing);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultEditing]);

  if (!editing || !canEdit) {
    return (
      <ValueBox
        {...noDrag}
        className={className}
        data-editing="false"
        onClick={() => onClickNotEditing?.()}
        data-pointer={onClickNotEditing ? 'true' : 'false'}
      >
        <ValueReadonly data-type="text">{value}</ValueReadonly>
        <Right>
          {canEdit && (
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

  if (!open) {
    return <></>;
  }

  return (
    <ValueBoxEdit
      data-editing="true"
      {...noDrag}
      ref={ref}
      tabIndex={editing ? 0 : undefined}
      className={className}
    >
      <ValueTextArea
        data-editing="true"
        data-valuechange={valueChange.toString()}
        ref={taref}
        data-type="text"
        value={value}
        onChange={(v) => setValue(v.currentTarget.value)}
        placeholder={placeholder}
        rows={singleLine ? 1 : undefined}
        onKeyDown={(e) =>
          singleLine && e.code.endsWith('Enter') && onSubmit(value) && false
        }
      />
      <Right>
        {valueChange && (
          <Icon style={iconLeft} onClick={() => valueChange && onSubmit(value)}>
            <SaveIcon />
          </Icon>
        )}
        {(valueChange || editing !== defaultEditing) && (
          <Icon
            style={iconRight}
            onClick={() => {
              setEditing(defaultEditing);
              setValue(defaultValue);
            }}
          >
            <UndoIcon />
          </Icon>
        )}
      </Right>
    </ValueBoxEdit>
  );
};
