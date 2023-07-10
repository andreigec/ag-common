import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';

import { useResize } from '../../helpers/useResize';
import { getColourWheel } from '../../styles';
import { HardOutline, TextOverflowEllipsis } from '../../styles/common';
import { convertToRaw, toArray } from './helpers';
import { TreeNodeData, TreeNodeOut } from './types';

const Base = styled.div`
  border: solid 1px #ccc;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Node = styled.div`
  margin: 1px;
  padding: 2px;
  display: flex;
  flex-flow: column;
`;

const NodeChildren = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
`;
const Title = styled.div`
  color: white;
  word-break: break-all;
  ${HardOutline('black')};
  ${TextOverflowEllipsis(1)}
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
  headDim: { x: number; y: number };
}) => {
  let width = 0;
  let height = 0;

  const sizeMult = n.size / head.size;
  width = Math.floor(headDim.x * sizeMult) - 6; //6 = padding+margins
  if (n.children.length === 0) {
    height = Math.floor(headDim.y * sizeMult);
  }

  const title =
    tnd.titleFn?.({
      path: n.name,
      pathCount: n.size,
      fullCount: head.size,
    }) || `${n.name} (${n.size}/${head.size})`;

  return (
    <Node
      style={{
        backgroundColor: getColourWheel(depth),
        width: width ? width + 'px' : '100%',
        height: height ? height + 'px' : '100%',
      }}
      key={n.name}
      data-ch={n.children.length}
      data-size={n.size}
      title={title}
    >
      <Title>{n.name}</Title>
      <NodeChildren>
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
    { x: number; y: number } | undefined
  >();

  const r = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!r.current) {
      return;
    }
    setHeadDim({ x: r.current.clientWidth, y: r.current.clientHeight });
  }, [pd]);

  if (head.size === 0) {
    return <div />;
  }

  return (
    <Base ref={r} style={{ width: '100%', height: '20rem' }}>
      {headDim && render({ tnd, n: head, depth: 0, head, headDim })}
    </Base>
  );
};
