export interface IDropdownList<T> {
  options: T[];
  value?: T;
  onChange: (v: T, index: number) => void;
  placeholder?: string;
  className?: string;
  renderF: (v: T) => string;
  children?: JSX.Element;
  /**
   * colour of dropdown shadow. default #555
   */
  shadow?: string;
  /**
   * max height of items list. default 50vh
   */
  maxHeight?: string;
  /**
   * if true, will show expanded first item. default false
   */
  defaultOpen?: boolean;
}
