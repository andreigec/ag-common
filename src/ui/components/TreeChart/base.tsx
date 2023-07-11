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
  display: flex;
  flex-flow: column;
  margin: 1px;
  padding: 2px;
  max-height: 100%;
  max-width: 100%;
`;

const NodeChildren = styled.div`
  display: grid;
  width: 100%;
  max-width: 100%;
  height: min-content;
  width: max-content;
`;

const Title = styled.span`
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
  const title =
    tnd.titleFn?.({
      path: n.name,
      pathCount: n.size,
      fullCount: head.size,
    }) || `${n.name} (${n.size}/${head.size})`;

  const leaf = n.children.length === 0;

  const nodeChildrenStyles: React.CSSProperties = {
    gridTemplateColumns: `repeat(${n.size}, 10px)`,
    gridTemplateRows: `repeat(${n.size}, 10px)`,
    maxHeight: `calc(100% - ${n.name ? '1rem' : '0rem'})`,
  };

  const nodeStyles: React.CSSProperties = {
    backgroundColor: getColourWheel(depth),
    gridColumnEnd: `span ${n.size}`,
    gridRowEnd: `span ${n.size}`,
    ...(!leaf && {
      gridRowEnd: '',
      gridRow: '-1/1',
      height: 'max-content',
    }),
  };

  return (
    <Node
      data-treenode
      style={nodeStyles}
      key={n.name}
      data-ch={n.children.length}
      data-size={n.size}
      title={title}
    >
      {n.name && <Title>{n.name}</Title>}
      {n.children.length > 0 && (
        <NodeChildren style={nodeChildrenStyles} data-type="nc">
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
      ...headDim,
      maxWidth: headDim.width,
      maxHeight: headDim.height,
      display: 'flex',
    }),
  };

  return (
    <Base ref={r} style={baseStyle}>
      <NodeChildren
        data-type="nc"
        style={{
          gridTemplateColumns: `repeat(${head.size}, minmax(0,10px))`,
          gridTemplateRows: `repeat(${head.size}, minmax(0, 10px))`,
        }}
      >
        {headDim && render({ tnd, n: head, depth: 0, head, headDim })}
      </NodeChildren>
    </Base>
  );
};
