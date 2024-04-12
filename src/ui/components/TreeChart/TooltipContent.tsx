import styled from '@emotion/styled';
import React from 'react';

import type { TreeNodeData, TreeNodeOut } from './types';

const Base = styled.div`
  padding: 0.5rem;
  border: solid 1px black;
  background-color: white;
`;

const Title = styled.div`
  font-weight: bold;
`;

export const TooltipContent = ({
  data,
  node,
  head,
}: {
  data: TreeNodeData;
  node: TreeNodeOut;
  head: TreeNodeOut;
}) => {
  let rows: string[] = [];

  let n: TreeNodeOut | undefined = node;
  while (n) {
    const t =
      data.titleFn?.({
        path: n.name,
        pathCount: n.size,
        fullCount: head.size,
      }) || `${n.name} (${n.size}/${head.size})`;
    rows = [t, ...rows];
    n = n.parent;
  }

  return (
    <Base>
      <Title>
        {rows.map((r, i) => (
          <div key={r} style={{ marginLeft: `${i * 2}px` }}>
            {r}
          </div>
        ))}
      </Title>
    </Base>
  );
};
