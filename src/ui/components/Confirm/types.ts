export interface IConfirmDialog {
  /** default (undefined) */
  topText?: string;
  bottomText: string;
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
}
