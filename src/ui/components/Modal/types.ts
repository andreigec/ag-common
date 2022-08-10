export interface IModal {
  open: boolean;
  setOpen: (b: boolean) => void;
  children: JSX.Element | JSX.Element[];
  position?: 'left' | 'right' | 'center';
  topPosition?: 'bottom' | 'top' | 'center';
  showCloseButton?: boolean;
  closeOnMoveMouseOutside?: boolean;
  className?: string;
  closeOnClickOutside?: boolean;
}
export interface IPromptAction {
  topText?: string;
  bottomText: string;
  defaultValue?: string;
  placeholder?: string;
}
