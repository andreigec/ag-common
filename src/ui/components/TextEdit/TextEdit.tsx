/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect, useRef } from 'react';
import { SaveIcon, UndoIcon, PencilIcon } from './images';
import { Icon, ValueBox, valueCss, ValueReadonly } from './common';
import styled from 'styled-components';
import { useOnClickOutside } from '../../helpers/useOnClickOutside';
import { noDrag } from '../../styles/common';

const ValueTextArea = styled.textarea`
  ${valueCss};
  resize: none;
  overflow: hidden;
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
        {canEdit && (
          <Icon
            style={{ right: '0.5rem' }}
            onClick={(e) => {
              e.stopPropagation();
              setEditing(true);
            }}
          >
            <PencilIcon />
          </Icon>
        )}
      </ValueBox>
    );
  }

  if (!open) {
    return <></>;
  }

  return (
    <ValueBox
      data-editing="true"
      {...noDrag}
      ref={ref}
      tabIndex={editing ? 0 : undefined}
      className={className}
    >
      <ValueTextArea
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
      {valueChange && (
        <Icon
          style={{ right: '2rem' }}
          onClick={() => valueChange && onSubmit(value)}
        >
          <SaveIcon />
        </Icon>
      )}
      {(valueChange || editing !== defaultEditing) && (
        <Icon
          style={{ right: '0.5rem' }}
          onClick={() => {
            setEditing(defaultEditing);
            setValue(defaultValue);
          }}
        >
          <UndoIcon />
        </Icon>
      )}
    </ValueBox>
  );
};
