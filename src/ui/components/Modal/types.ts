export interface IModal {
  open: boolean;
  setOpen: (b: boolean) => void;
  children: React.ReactNode;
  position?: 'left' | 'right' | 'center';
  topPosition?: 'bottom' | 'top' | 'center';
  showCloseButton?: boolean;
  closeOnMoveMouseOutside?: boolean;
  className?: string;
  closeOnClickOutside?: boolean;
}
