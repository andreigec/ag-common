import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';

import { useResize } from '../../helpers/useResize';
import { getColourWheel } from '../../styles';
import { HardOutline, TextOverflowEllipsis } from '../../styles/common';
import { convertToRaw, toArray } from './helpers';
import type { TreeNodeData, TreeNodeOut } from './types';

const Base = styled.div`
  border: solid 1px #ccc;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const NodeChildren = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const Node = styled.div`
  margin: 1px;
  padding: 2px;
  display: flex;
  flex-flow: column;
  height: min-content;
`;
const Title = styled.div`
  color: white;
  word-break: break-all;
  ${HardOutline('black')};
  ${TextOverflowEllipsis(1)};
  min-height: 1rem;
  line-height: 1rem;
`;
const render = ({
  n,
  depth,
  head,
  headDim,
  tnd,
}: {
  tnd: TreeNodeData;
  n: TreeNodeOut;
  depth: number;
  head: TreeNodeOut;
  headDim: { width: number; height: number };
}) => {
  let width = 0;
  let height = 0;
  const leaf = n.children.length === 0;
  const sizeMult = n.size / head.size;
  width = Math.floor(headDim.width * sizeMult) - 6; //6 = padding+margins
  if (n.children.length === 0) {
    height = Math.floor(headDim.height * sizeMult);
  }

  const title =
    tnd.titleFn?.({
      path: n.name,
      pathCount: n.size,
      fullCount: head.size,
    }) || `${n.name} (${n.size}/${head.size})`;

  return (
    <Node
      data-treenode
      style={{
        backgroundColor: getColourWheel(depth),

        ...(leaf && {
          width: width ? width + 'px' : '100%',
          height: height ? height + 'px' : '100%',
        }),
      }}
      key={n.name}
      data-ch={n.children.length}
      data-size={n.size}
      title={title}
    >
      {n.name && <Title>{n.name}</Title>}
      <NodeChildren data-type="nc">
        {n.children.map((c) =>
          render({ n: c, depth: depth + 1, head, headDim, tnd }),
        )}
      </NodeChildren>
    </Node>
  );
};
export const TreeChart = (tnd: TreeNodeData) => {
  const raw = convertToRaw({ tnd });
  const head = toArray('', raw);

  const pd = useResize();

  const [headDim, setHeadDim] = useState<
    { width: number; height: number } | undefined
  >();

  const r = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!r.current) {
      return;
    }
    const width = r.current.clientWidth;
    const height = r.current.clientHeight || r.current.clientWidth;
    setHeadDim({
      width,
      height,
    });
  }, [pd]);

  if (head.size === 0) {
    return <div />;
  }

  return (
    <Base ref={r}>
      {headDim && render({ tnd, n: head, depth: 0, head, headDim })}
    </Base>
  );
};
