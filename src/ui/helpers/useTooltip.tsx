import styled from '@emotion/styled';
import type { MouseEvent } from 'react';
import React, { createRef, useEffect, useState } from 'react';

const Base = styled.div`
  position: absolute;
  z-index: 2;
`;

interface IPos<T> {
  cursor: MouseEvent;
  data: T;
  parentWidth: number;
  parentHeight: number;
  x: number;
  y: number;
}

const Comp = <T,>({
  pos,
  children,
}: {
  pos: IPos<T> | undefined;
  children: (data: T) => JSX.Element;
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

  if (!pos) {
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
    top = pos.y + 5;
    if (top + size.p.tooltipHeight > pos.parentHeight) {
      top = undefined;
      bottom = pos.parentHeight - pos.y;
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
  const pos = useState<IPos<T>>();

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
      top: parentTop,
      left: parentLeft,
      width: parentWidth,
      height: parentHeight,
    } = p.parent?.getBoundingClientRect() ?? { width: 0, height: 0 };

    const x = p.element.pageX - (parentLeft ?? 0);
    const y = p.element.pageY - (parentTop ?? 0);

    const p2 = {
      cursor: p.element,
      data: p.data,
      parentWidth,
      parentHeight,
      x,
      y,
    };

    pos[1](p2);
  };

  return {
    Comp,
    setPos,
    pos: pos[0],
  };
};
