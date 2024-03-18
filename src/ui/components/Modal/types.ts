import type { CSSProperties } from 'react';

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
  /** if provided, will create inside this #id */
  portalId?: string;
  /**applied to modal inside fixed */
  style?: CSSProperties;
}
