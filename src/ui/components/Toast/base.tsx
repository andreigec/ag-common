'use client';
import styled from '@emotion/styled';
import React, { createContext, useEffect, useMemo, useState } from 'react';

import { random } from '../../../common/helpers/random';
import { Warning } from '../../icons/Warning';
import type { IVarStyles } from '../../styles/common';
import { getVarStyles } from '../../styles/common';
import { FlexColumn } from '../FlexColumn';
import { FlexRow } from '../FlexRow';
import { ProgressBar } from '../ProgressBar';
import { Cross } from './Cross';
import { Tick } from './Tick';
import type {
  IToastInt,
  IToastProviderOptions,
  TAddToast,
  TAddToastDetailed,
} from './types';

export const ToastContext = createContext<{
  addToast: TAddToast;
  addToastDetailed: TAddToastDetailed;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}>({} as any);
const ToastContainerStyle = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0.5rem;
  z-index: 10000;

  display: flex;
  flex-flow: column;
  align-items: flex-end;
  max-width: 50vw;
`;

const ToastStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 0.5rem;
  position: relative;
  font-size: 1.2rem;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }

  border: solid 1px;
  border-radius: 6px;
`;

const CloseStyle = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 0.5rem;
  height: 0.5rem;

  cursor: pointer;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1;
  &:hover {
    background-color: var(--bg);
  }
`;
const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;

const ProgressBarStyled = styled(ProgressBar)`
  height: 0.75rem;
  margin-top: 0.5rem;
`;

export const Toast = ({
  toast,
  close,
  style,
}: {
  toast: IToastInt;
  style: IVarStyles;
  close: (s: string) => void;
}) => {
  let closeMs: number | undefined;
  if (toast.options?.autoClose) {
    closeMs = toast.options.autoClose;
  } else if (toast.options?.autoClose === undefined) {
    if (toast.options?.appearance === 'success') {
      closeMs = 5000;
    } else {
      closeMs = 10000;
    }
  }

  let icon = <Tick />;

  switch (toast.options?.appearance) {
    case 'error': {
      icon = <Cross />;
      break;
    }
    case 'warning': {
      icon = <Warning />;
      break;
    }
  }

  useEffect(() => {
    if (!closeMs) {
      return;
    }
    const timeout = setTimeout(() => close(toast.id), closeMs);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeStyle = { color: style.color, '--bg': style.borderColor };
  const toastStyle = {
    ...style,
    boxShadow: `hsl(from ${style.borderColor} h s 25%) 0px 7px 29px 0px`,
  };

  if (toast.type === 'standard') {
    return (
      <ToastStyle style={toastStyle}>
        <CloseStyle onClick={() => close(toast.id)} style={closeStyle}>
          &times;
        </CloseStyle>
        <Icon style={{ fill: style.color }}>{icon}</Icon>
        {toast.message}
        {closeMs !== undefined && (
          <ProgressBarStyled
            max={100}
            min={0}
            dotPercentages={null}
            transitionToMs={closeMs}
          />
        )}
      </ToastStyle>
    );
  }
  return (
    <ToastStyle style={toastStyle}>
      <CloseStyle onClick={() => close(toast.id)} style={closeStyle}>
        &times;
      </CloseStyle>
      <FlexRow noWrap center>
        {toast.icon === undefined && <Icon>{icon}</Icon>}
        {toast.icon}
        <FlexColumn
          style={{ marginLeft: toast.icon === null ? '0' : '0.5rem' }}
        >
          <b>{toast.title}</b>
          {toast.content}
        </FlexColumn>
      </FlexRow>

      {closeMs !== undefined && (
        <ProgressBarStyled
          max={100}
          min={0}
          dotPercentages={null}
          transitionToMs={closeMs}
        />
      )}
    </ToastStyle>
  );
};

export const ToastProvider = ({
  children,
  providerOptions,
}: {
  children: React.ReactNode;
  providerOptions?: IToastProviderOptions;
}) => {
  const [toasts, setToasts] = useState<IToastInt[]>([]);
  const addToast: TAddToast = (message, options) =>
    setToasts((currentToasts) => [
      ...currentToasts.filter(
        (ct) =>
          ct.type === 'detailed' ||
          ct.message !== message ||
          JSON.stringify(ct.options) !== JSON.stringify(options),
      ),
      { id: random(10000).toString(), message, options, type: 'standard' },
    ]);

  const addToastDetailed: TAddToastDetailed = (p, options) =>
    setToasts((currentToasts) => [
      ...currentToasts,
      { id: random(10000).toString(), ...p, options, type: 'detailed' },
    ]);

  const close = (id: string) =>
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id),
    );
  const contextValue = useMemo(() => ({ addToast, addToastDetailed }), []);
  const style = getVarStyles(providerOptions?.style);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainerStyle>
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} close={close} style={style} />
        ))}
      </ToastContainerStyle>
    </ToastContext.Provider>
  );
};
