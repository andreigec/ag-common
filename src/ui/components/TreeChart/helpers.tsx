import type { TreeNodeData, TreeNodeOut } from './types';

export const convertToRaw = ({
  tnd: { data, pathDelimiter },
}: {
  tnd: TreeNodeData;
}): TreeNodeOut => {
  if (data.length === 0) {
    return { children: {}, size: 0, name: '', depth: 0, parent: undefined };
  }
  const dm: TreeNodeOut = {
    size: 0,
    children: {},
    name: '',
    depth: 0,
    parent: undefined,
  };

  data.forEach((line) => {
    const names = line.path.split(pathDelimiter || '/');

    let node: TreeNodeOut | undefined = dm;

    let a = 0;
    do {
      node.size += line.size;

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (names[a] === undefined) {
        break;
      }

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!node.children[names[a]]) {
        node.children[names[a]] = {
          children: {},
          size: 0,
          name: names[a],
          depth: a,
          parent: node,
        };
      }

      node = node.children[names[a]] as TreeNodeOut | undefined;

      a += 1;
    } while (node);
  });
  return dm;
};
