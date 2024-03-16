import type { IVarStyles } from '../../styles';

export type TToastAppearance = 'error' | 'warning' | 'success';
export type TToastOptions =
  | {
      appearance: TToastAppearance;
      /** default 5 seconds for success, 10 otherwise. null to override */
      autoClose?: number | null;
    }
  | undefined;
export type TAddToast = (m: string, options?: TToastOptions) => void;
export type TAddToastDetailed = (
  p: Omit<IToastDetailed, 'id' | 'type' | 'options'>,
  options?: TToastOptions,
) => void;

export interface IToastProviderOptions {
  style?: Partial<IVarStyles>;
}

interface IToastStandard {
  type: 'standard';
  message: string;
  options?: TToastOptions;
  id: string;
}

interface IToastDetailed {
  type: 'detailed';
  title?: string;
  content: JSX.Element;
  id: string;
  options?: TToastOptions;
  /** if provided will show. undef will show default icon. null wont show */
  icon?: JSX.Element | null;
}

export type IToastInt = IToastStandard | IToastDetailed;
