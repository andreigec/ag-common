import { TreeNodeData, TreeNodeOut } from './types';

interface TreeNodeRaw {
  size: number;
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
    return { children: {}, size: 0 };
  }
  const dm: TreeNodeRaw = { size: 1, children: {} };

  data.forEach((line) => {
    const names = line.path.split(pathDelimiter || '/');

    if (!dm.children[names[0]]) {
      dm.children[names[0]] = { size: 0, children: {} };
    }

    let node = dm.children[names[0]];

    for (let a = 1; a <= names.length; a += 1) {
      if (!node) {
        return;
      }
      if (!node.children[names[a]] && names[a]) {
        node.children[names[a]] = { children: {}, size: 0 };
      }
      node.size += 1;
      node = node.children[names[a]];
    }
  });
  return dm;
};

const toArrayAux = (name: string, n: TreeNodeRaw): TreeNodeOut => ({
  name,
  size: n.size,
  children: Object.entries(n.children).map(([cn, cv]) => toArrayAux(cn, cv)),
});

export const toArray = (name: string, raw: TreeNodeRaw): TreeNodeOut => {
  const arr = toArrayAux(name, { children: raw.children, size: 0 });
  arr.size = arr.children.map((d) => d.size).reduce((a, b) => a + b, 0);
  return arr;
};
