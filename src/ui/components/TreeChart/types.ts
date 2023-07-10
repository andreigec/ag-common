export interface TreeNodeOut {
  name: string;
  size: number;
  children: TreeNodeOut[];
}
export interface TreeNodeData {
  data: {
    path: string;
    /** count of this path. default 1 */
    size: number;
  }[];
  /** split paths by this delim. default= / */
  pathDelimiter?: string;
  /** get the hover title for the node. has sensible default */
  titleFn?: (p: {
    path: string;
    pathCount: number;
    fullCount: number;
  }) => string;
}
