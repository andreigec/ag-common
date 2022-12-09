import React from 'react';
import toastx, { Toaster, ToastPosition } from 'react-hot-toast';

export interface IToastOptions {
  appearance: 'error' | 'success';
  autoClose?: number;
}

export const addToast = (m: string, options?: IToastOptions) => {
  if (options?.appearance === 'error') {
    toastx.error(m, {
      duration: options?.autoClose || 5000,
    });
  } else {
    toastx.success(m, {
      duration: options?.autoClose || 5000,
    });
  }
};

export const ToastProvider = ({ position }: { position: ToastPosition }) => (
  <Toaster position={position} />
);
