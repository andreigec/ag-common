import type { CSSProperties } from 'react';

export interface TreeNodeOut {
  name: string;
  size: number;
  depth: number;
  children: {
    [P in string]: TreeNodeOut;
  };
  parent: TreeNodeOut | undefined;
}

export interface TreeNodeData {
  className?: string;
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
  style?: CSSProperties;
}
