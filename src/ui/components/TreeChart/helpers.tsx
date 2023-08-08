import type { TreeNodeData, TreeNodeOut } from './types';

interface TreeNodeRaw {
  name: string;
  size: number;
  depth: number;
  children: {
    [P in string]: TreeNodeRaw;
  };
}
export const convertToRaw = ({
  tnd: { data, pathDelimiter },
}: {
  tnd: TreeNodeData;
}): TreeNodeRaw => {
  if (!data || data.length === 0) {
    return { children: {}, size: 0, name: '', depth: 0 };
  }
  const dm: TreeNodeRaw = { size: 0, children: {}, name: '', depth: 0 };

  data.forEach((line) => {
    const names = line.path.split(pathDelimiter || '/');

    let node = dm;

    let a = 0;
    do {
      node.size += line.size;

      if (names[a] === undefined) {
        break;
      }

      if (!node.children[names[a]]) {
        node.children[names[a]] = {
          children: {},
          size: 0,
          name: names[a],
          depth: a,
        };
      }

      node = node.children[names[a]];

      a += 1;
    } while (node);
  });
  return dm;
};

const toArrayAux = (name: string, n: TreeNodeRaw): TreeNodeOut => ({
  name,
  size: n.size,
  depth: n.depth,
  children: Object.entries(n.children).map(([cn, cv]) => toArrayAux(cn, cv)),
});

export const toArray = (name: string, raw: TreeNodeRaw): TreeNodeOut => {
  const arr = toArrayAux(name, {
    children: raw.children,
    size: 0,
    name: '',
    depth: 0,
  });
  arr.size = arr.children.map((d) => d.size).reduce((a, b) => a + b, 0);

  return arr;
};
