import styled from '@emotion/styled';
import type { MouseEvent } from 'react';
import React, { createRef, useEffect, useState } from 'react';

const Base = styled.div`
  position: absolute;
  z-index: 2;
`;

interface IPos {
  x?: number;
  y?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  parentWidth: number;
  parentHeight: number;
}

const Comp = ({
  pos,
  children,
}: {
  pos: IPos | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: (data?: any) => JSX.Element;
}) => {
  const ref = createRef<HTMLDivElement>();
  const [size, setSize] = useState<{
    p?: { tooltipWidth: number; tooltipHeight: number };
  }>();

  useEffect(() => {
    if (size?.p ?? !ref.current) {
      return;
    }
    setSize({
      p: {
        tooltipWidth: ref.current.clientWidth,
        tooltipHeight: ref.current.clientHeight,
      },
    });
  }, [ref, size]);

  if (pos?.x === undefined || pos?.y === undefined) {
    return null;
  }

  let left: number | undefined;
  let right: number | undefined;
  let top: number | undefined;
  let bottom: number | undefined;

  if (size?.p) {
    left = pos.x + 5;
    if (pos.x + size.p.tooltipWidth > pos.parentWidth) {
      left = undefined;
      right = pos.parentWidth - pos.x + 5;
    }
    //
    bottom = pos.parentHeight - pos.y + 5;
    if (pos.y - size.p.tooltipHeight < pos.parentHeight) {
      bottom = undefined;
      top = pos.y + 5;
    }
  }

  return (
    <Base
      ref={ref}
      style={{
        left,
        right,
        top,
        bottom,
        ...(!size?.p && { zIndex: -1 }),
      }}
    >
      {children(pos.data)}
    </Base>
  );
};

export const useTooltip = <T,>() => {
  const pos = useState<IPos>();

  const setPos = (p?: {
    element: MouseEvent;
    parent: Element | null;
    data: T;
  }) => {
    if (!p) {
      pos[1](undefined);
      return;
    }

    const {
      left,
      top,
      width: parentWidth,
      height: parentHeight,
    } = p.element.currentTarget.getBoundingClientRect();

    const x = p.element.clientX - left;
    const y = p.element.clientY - top;
    const p2 = {
      x,
      y,
      data: p.data,
      parentWidth,
      parentHeight,
    };

    pos[1](p2);
  };

  return {
    Comp,
    setPos,
    pos: pos[0],
  };
};
