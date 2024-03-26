import styled from '@emotion/styled';
import type { MouseEvent } from 'react';
import React, { createRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Base = styled.div`
  position: absolute;
  z-index: 2;
`;
const globalId = 'ag-tooltip-portal';

interface IPos<T> {
  cursor: MouseEvent;
  data: T;
  usePortal: boolean;
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
    if (!ref.current) {
      return;
    }
    const tooltipWidth = Math.max(
      ref.current.clientWidth,
      ref.current.scrollWidth,
    );
    const tooltipHeight = Math.max(
      ref.current.clientHeight,
      ref.current.scrollHeight,
    );
    if (
      tooltipHeight === size?.p?.tooltipHeight ||
      tooltipWidth === size?.p?.tooltipWidth ||
      tooltipHeight === 0 ||
      tooltipWidth === 0
    ) {
      return;
    }
    setSize({
      p: {
        tooltipWidth,
        tooltipHeight,
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
  const gap = 5;
  if (size?.p) {
    left = pos.x + gap;
    const newRight = pos.parentWidth - pos.x + gap;

    if (pos.x + gap + size.p.tooltipWidth > pos.parentWidth) {
      left = undefined;
      right = newRight;
    }
    //
    top = pos.y + gap;

    if (top + size.p.tooltipHeight > pos.parentHeight) {
      top = undefined;
      bottom = pos.parentHeight - pos.y;
    }

    if (right && right + size.p.tooltipWidth > pos.parentWidth) {
      right = undefined;
      left = 0;
    }

    if (bottom && bottom + size.p.tooltipHeight > pos.parentHeight) {
      bottom = undefined;
      top = 0;
    }
  }

  const Content = (
    <Base
      ref={ref}
      style={{
        left,
        right,
        top,
        bottom,
        zIndex: 10,
        ...(pos.usePortal && { position: 'fixed' }),
        ...(!size?.p && { zIndex: -1 }),
      }}
    >
      {children(pos.data)}
    </Base>
  );
  if (pos.usePortal) {
    return createPortal(
      Content,
      document.querySelector(`#${globalId}`) as Element,
    );
  }
  return Content;
};

export const useTooltip = <T,>() => {
  const [pos, setPosRaw] = useState<IPos<T>>();

  useEffect(() => {
    if (document.querySelectorAll(`#${globalId}`).length > 0) {
      return;
    }
    const d = document.createElement('div');
    d.id = globalId;
    document.body.appendChild(d);
    return () => {
      document.querySelector(`#${globalId}`)?.remove();
    };
  }, []);

  const setPos = (p?: {
    element: MouseEvent;
    parent: Element | null;
    data: T;
  }) => {
    if (!p) {
      setPosRaw(undefined);
      return;
    }

    let parentTop = 0;
    let parentLeft = 0;
    let parentWidth = document.body.clientWidth;
    let parentHeight = document.body.clientHeight;

    if (p.parent) {
      ({
        top: parentTop,
        left: parentLeft,
        width: parentWidth,
        height: parentHeight,
      } = p.parent.getBoundingClientRect());
    }

    const x = p.element.pageX - parentLeft;
    const y = p.element.pageY - parentTop;

    const p2 = {
      cursor: p.element,
      data: p.data,
      parentWidth,
      parentHeight,
      x,
      y,
      usePortal: !p.parent,
    };

    setPosRaw(p2);
  };

  return {
    Comp,
    setPos,
    pos,
  };
};
