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
  overflow: hidden;
  height: 100%;
  width: 100%;
  flex-grow: 1;
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
  align-items: flex-start;
`;
const Title = styled.span`
  color: white;
  word-break: break-all;
  ${HardOutline('black')};
  ${TextOverflowEllipsis(1)};
  min-height: 1rem;
  line-height: 1rem;
  overflow: hidden;
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
  const sizeMult = n.size / head.size;
  const width = Math.floor(headDim.width * sizeMult) - 2;
  const height = Math.floor(headDim.height * sizeMult);
  const title =
    tnd.titleFn?.({
      path: n.name,
      pathCount: n.size,
      fullCount: head.size,
    }) || `${n.name} (${n.size}/${head.size})`;

  const leaf = n.children.length === 0;

  const titleStyles: React.CSSProperties = {
    //width: `${width}px`,
    ...(leaf && {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
  };

  const nodeStyles: React.CSSProperties = {
    backgroundColor: getColourWheel(depth),
    ...(leaf && {
      width: `${width}px`,
      height: `calc(${height}px + 0rem)`,
    }),
  };

  return (
    <Node
      style={nodeStyles}
      key={n.name}
      data-ch={n.children.length}
      data-size={n.size}
      title={title}
    >
      <Title style={titleStyles}>{n.name}</Title>
      {n.children.length > 0 && (
        <NodeChildren style={{ maxHeight: headDim.height }}>
          {n.children
            .sort((a, b) => (a.size < b.size ? 1 : -1))
            .map((c) => render({ n: c, depth: depth + 1, head, headDim, tnd }))}
        </NodeChildren>
      )}
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
    setHeadDim({
      width: r.current.clientWidth,
      height: r.current.clientHeight || r.current.clientWidth * 0.5,
    });
  }, [pd]);

  if (head.size === 0) {
    return <div />;
  }

  const baseStyle: React.CSSProperties = {
    ...(headDim && {
      maxWidth: headDim.width,
      maxHeight: headDim.height,
    }),
  };

  return (
    <Base ref={r} style={baseStyle}>
      {headDim && render({ tnd, n: head, depth: 0, head, headDim })}
    </Base>
  );
};
