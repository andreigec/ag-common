import type { CSSProperties } from 'react';

export interface IConfirmDialog {
  /** default (undefined) */
  topText?: string;
  bottomText: string;
  style?: CSSProperties;
}
export interface IConfirmModal {
  onSubmit: (v: boolean) => void;
  /** default (undefined) */
  topText?: string;
  bottomText: string;
  /** default OK */
  okText?: string;
  /** default Cancel */
  cancelText?: string;
  style?: CSSProperties;
}
