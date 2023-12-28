import type { CSSProperties } from 'react';
import type { Root } from 'react-dom/client';

export interface IPromptModal {
  defaultValue?: string;
  placeholder?: string;
  res: (v: string | undefined) => void;
  root?: Root;
  wrapper?: HTMLDivElement;
  topText?: string;
  bottomText: string;
  /** default 'OK' */
  okText?: string;
  /** default "cancel" */
  cancelText?: string;
  style?: CSSProperties;
}
export interface IPromptDialog {
  topText?: string;
  bottomText: string;
  defaultValue?: string;
  placeholder?: string;
  style?: CSSProperties;
}
