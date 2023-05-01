export interface ISearchDialog<T> {
  defaultValue?: string;
  placeholderText?: string;
  /**
   * method run to render each filtered item
   */
  renderItem: ({
    searchText,
    item,
    index,
  }: {
    searchText: string;
    item: T;
    index: number;
  }) => JSX.Element | string;
  /**
   * all potential items
   */
  displayItems: T[];
  /**
   * run to filter items by search text
   */
  willDisplayItem: (searchText: string, item: T) => boolean;
  /** how many search items to return at most. default 20 */
  maxDisplayItems?: number;
  /**
   * get unique render key
   */
  getKeyF: (i: T) => string;
  className?: string;
  texts?: {
    /**
     * default if not provided: "showing X out of Y total items"
     */
    totalItems?: (showing: number, outof: number) => string;
  };
}
export type TSearchModalRes<T> =
  | undefined
  | { foundItem: T; searchText: string; target: EventTarget };
export type ISearchModal<T> = ISearchDialog<T>;

export type ISearchInline<T> = ISearchDialog<T>;
