export type TToastAppearance = 'error' | 'warning' | 'success';
export type TToastOptions =
  | {
      appearance: TToastAppearance;
      /** default 5 seconds for success only. null to override */
      autoClose?: number | null;
    }
  | undefined;
export type TAddToast = (m: string, options?: TToastOptions) => void;

export interface IToastProviderOptions {
  /** default false */
  darkMode?: boolean;
}

export interface IToast {
  message: string;
  options?: TToastOptions;
}

export interface IToastInt extends IToast {
  id: string;
}
