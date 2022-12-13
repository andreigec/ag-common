import styled from '@emotion/styled';
import React, { createContext, useEffect, useMemo, useState } from 'react';

import { getRandomInt } from '../../../common';
import { ProgressBar } from '../ProgressBar';
import { Cross } from './Cross';
import { Tick } from './Tick';
import { IToastInt, IToastProviderOptions, TAddToast } from './types';
import { Warning } from './Warning';

export const ToastContext = createContext<{
  addToast: TAddToast;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}>({} as any);
const ToastContainerStyle = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0.5rem;
  z-index: 10000;
`;

const ToastStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 0.5rem;
  position: relative;
  color: white;
  font-size: 1.2rem;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }

  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  &[data-dark='false'] {
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
  }
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
  &:hover {
    background-color: #333;
  }

  &[data-dark='false'] {
    color: #000;
    &:hover {
      background-color: #eee;
    }
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
  providerOptions,
}: {
  toast: IToastInt;
  providerOptions: IToastProviderOptions;
  close: (s: string) => void;
}) => {
  const darkMode = providerOptions?.darkMode ?? false;
  let closeMs: number | undefined;
  if (toast.options?.autoClose) {
    closeMs = toast.options?.autoClose;
  } else if (toast.options?.autoClose === undefined) {
    closeMs = 5000;
  }

  let icon = <Tick />;

  switch (toast?.options?.appearance) {
    case 'error': {
      closeMs = undefined;
      icon = <Cross />;
      break;
    }
    case 'warning': {
      closeMs = undefined;
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
  return (
    <ToastStyle data-dark={darkMode}>
      <CloseStyle data-dark={darkMode} onClick={() => close(toast.id)}>
        &times;
      </CloseStyle>
      <Icon>{icon}</Icon>
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
      ...currentToasts,
      { id: getRandomInt(10000).toString(), message, options },
    ]);
  const close = (id: string) =>
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id),
    );
  const contextValue = useMemo(() => ({ addToast }), []);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainerStyle>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            toast={toast}
            close={close}
            providerOptions={providerOptions || {}}
          />
        ))}
      </ToastContainerStyle>
    </ToastContext.Provider>
  );
};
