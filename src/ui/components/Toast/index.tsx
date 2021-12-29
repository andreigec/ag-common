import toastx, { Toaster, ToastPosition } from 'react-hot-toast';
import React from 'react';

interface Options {
  appearance: 'error' | 'success';
  autoClose?: number;
}

export const addToast = (m: string, options?: Options) => {
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
