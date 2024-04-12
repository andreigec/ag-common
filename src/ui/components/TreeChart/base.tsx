'use client';
import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';

import { useResize } from '../../helpers/useResize';
import type { IUseTooltip } from '../../helpers/useTooltip';
import { useTooltip } from '../../helpers/useTooltip';
import { getColourWheel } from '../../styles';
import { HardOutline, TextOverflowEllipsis } from '../../styles/common';
import { convertToRaw } from './helpers';
import { TooltipContent } from './TooltipContent';
import type { TreeNodeData, TreeNodeOut } from './types';

const Base = styled.div`
  border: solid 1px #ccc;
  max-height: 100%;
  overflow-y: auto;
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
  overflow: hidden;
  &[data-leaf='true'] {
    width: 100%;
    height: 100%;
    min-height: 1rem;
    min-width: 1rem;
    max-width: 10rem;
    max-height: 10rem;
  }
`;

const Title = styled.div`
  color: white;
  word-break: break-all;
  ${HardOutline('black')};
  ${TextOverflowEllipsis(1)};
  min-height: 1rem;
  line-height: 1rem;
`;

const Render = ({
  n,
  depth,
  head,
  headDim,
  tnd,
  UT,
}: {
  tnd: TreeNodeData;
  n: TreeNodeOut;
  depth: number;
  head: TreeNodeOut;
  headDim: { width: number; height: number };
  UT: IUseTooltip<ITreeChartUTData>;
}) => {
  const children = Object.values(n.children);
  const leaf = children.length === 0;
  const sizeMult = n.size / head.size;

  const biggerDim = Math.max(headDim.width, headDim.height);
  const nodeSize = Math.floor(biggerDim * sizeMult).toString();

  return (
    <Node
      data-treenode
      data-leaf={leaf.toString()}
      style={{
        backgroundColor: getColourWheel(depth),
        ...(leaf &&
          nodeSize && {
            width: nodeSize + 'px',
            height: nodeSize + 'px',
          }),
      }}
      key={n.name}
      data-ch={n.children.length}
      data-size={n.size}
      onMouseLeave={() => UT.setPos(undefined)}
      onMouseMove={(element) => {
        UT.setPos({
          element,
          parent: null,
          data: { data: tnd, node: n, head },
        });
        element.preventDefault();
        element.stopPropagation();
      }}
    >
      {n.name && <Title>{n.name}</Title>}
      {children.length > 0 && (
        <NodeChildren data-type="nc">
          {children.map((c) =>
            Render({
              UT,
              n: c,
              depth: depth + 1,
              head,
              headDim,
              tnd,
            }),
          )}
        </NodeChildren>
      )}
    </Node>
  );
};

interface ITreeChartUTData {
  data: TreeNodeData;
  node: TreeNodeOut;
  head: TreeNodeOut;
}

export const TreeChart = (tnd: TreeNodeData) => {
  const UT = useTooltip<ITreeChartUTData>();
  const head = convertToRaw({ tnd });

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
    <Base ref={r} className={tnd.className} style={tnd.style}>
      <UT.Comp pos={UT.pos}>{(p) => <TooltipContent {...p} />}</UT.Comp>
      {headDim &&
        Render({
          UT,
          tnd,
          n: head,
          depth: 0,
          head,
          headDim,
        })}
    </Base>
  );
};
