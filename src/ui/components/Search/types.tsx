export interface ISearchDialog<T> {
  placeholderText?: string;
  closeText?: string;
  /**
   * method run to render each filtered item
   */
  renderItem: (searchText: string, item: T) => JSX.Element | string;
  /**
   * all potential items
   */
  displayItems: T[];
  /**
   * run to filter items by search text
   */
  willDisplayItem: (searchText: string, item: T) => boolean;
  /**
   * get unique render key
   */
  getKeyF: (i: T) => string;
}
export type TSearchModalRes<T> =
  | undefined
  | { foundItem: T; searchText: string };
