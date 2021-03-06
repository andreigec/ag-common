export interface IDropdownList<T> {
  /**
   * all items that can be in dropdown
   */
  options: T[];
  /**
   * selected item from options.
   */
  value?: T;
  onChange: (v: T, index: number) => void;
  /**
   * placeholder title for list
   */
  placeholder?: string;
  className?: string;
  /**
   * function to render value
   */
  renderF: (v: T) => string;
  /**
   * colour of dropdown shadow. default #555
   */
  shadow?: string;
  /**
   * max height of items list. default 50vh
   */
  maxHeight?: string;
  /**
   * if not provided, will default display value, then kebab dots
   */
  children?: JSX.Element;
}
