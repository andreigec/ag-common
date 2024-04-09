import type { CSSProperties } from 'react';

export interface IModal {
  open: boolean;
  setOpen: (b: boolean, e: Event) => void;
  children: React.ReactNode;
  position?: 'left' | 'right' | 'center';
  topPosition?: 'bottom' | 'top' | 'center';
  showCloseButton?: boolean;
  closeOnMoveMouseOutside?: boolean;
  className?: string;
  closeOnClickOutside?: boolean;
  /** if provided, will create inside this #id. default "ag-modal-portal". if null, wont use global id */
  portalId?: string | null;
  /**applied to modal inside fixed */
  style?: CSSProperties;
}
