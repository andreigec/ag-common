import styled from '@emotion/styled';
import type { MouseEvent } from 'react';
import React, { createRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Base = styled.div`
  position: absolute;
  z-index: 2;
`;

interface IPos<T> {
  cursor: MouseEvent;
  data: T;
  portalId: string;
  hasParent: boolean;
  parentWidth: number;
  parentHeight: number;
  x: number;
  y: number;
}

interface IPosSize {
  tooltipWidth: number;
  tooltipHeight: number;
}

const Comp = <T,>({
  pos,
  children,
}: {
  pos: IPos<T> | undefined;
  children: (pos: IPos<T>, size?: IPosSize) => JSX.Element;
}) => {
  const ref = createRef<HTMLDivElement>();
  const [size, setSize] = useState<IPosSize>();

  useEffect(() => {
    if (!ref.current || size) {
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
    if (tooltipHeight === 0 || tooltipWidth === 0) {
      return;
    }
    setSize({
      tooltipWidth,
      tooltipHeight,
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
  if (size) {
    left = pos.x + gap;
    const newRight = pos.parentWidth - pos.x + gap;

    if (pos.x + gap + size.tooltipWidth > pos.parentWidth) {
      left = undefined;
      right = newRight;
    }
    //
    top = pos.y + gap;

    if (top + size.tooltipHeight > pos.parentHeight) {
      if (pos.hasParent) {
        top = undefined;
      }

      bottom = pos.parentHeight - pos.y;
    }

    if (right && right + size.tooltipWidth > pos.parentWidth) {
      if (pos.hasParent) {
        right = undefined;
      }
      left = 0;
    }

    if (bottom && bottom + size.tooltipHeight > pos.parentHeight) {
      if (pos.hasParent) {
        bottom = undefined;
      }
      top = 0;
    }
  }

  const Content = (
    <Base
      data-type="tooltip-content"
      ref={ref}
      style={{
        left,
        right,
        top,
        bottom,
        zIndex: 10,
        overflow: 'hidden',
        ...(!pos.hasParent && { position: 'fixed' }),
        ...(!size && { zIndex: -1 }),
      }}
    >
      {children(pos, size)}
    </Base>
  );
  const e = document.querySelector(`#${pos.portalId}`) as Element | undefined;
  if (!pos.hasParent && e) {
    return createPortal(Content, e);
  }
  return Content;
};

type ITooltipProps = {
  /** default 'ag-tooltip-portal' */
  portalId: string;
};

export interface IUseTooltip<T> {
  Comp: <T>({
    pos,
    children,
  }: {
    pos: IPos<T> | undefined;
    children: (pos: IPos<T>, size?: IPosSize) => JSX.Element;
  }) => JSX.Element | null;
  setPos: (
    p?:
      | {
          element: MouseEvent;
          parent: Element | null;
          data: T;
        }
      | undefined,
  ) => void;
  pos: IPos<T> | undefined;
}

export const useTooltip = <T,>(p?: ITooltipProps): IUseTooltip<T> => {
  const portalId = p?.portalId || 'ag-tooltip-portal';
  const [pos, setPosRaw] = useState<IPos<T>>();

  useEffect(() => {
    if (document.querySelectorAll(`#${portalId}`).length > 0) {
      return;
    }
    const d = document.createElement('div');
    d.id = portalId;
    document.body.appendChild(d);
    return () => {
      try {
        document.querySelector(`#${portalId}`)?.remove();
      } catch (e) {
        //
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    let x = 0;
    let y = 0;

    if (p.parent) {
      ({
        top: parentTop,
        left: parentLeft,
        width: parentWidth,
        height: parentHeight,
      } = p.parent.getBoundingClientRect());
      x = p.element.pageX - parentLeft;
      y = p.element.pageY - parentTop;
    } else {
      parentWidth = window.innerWidth;
      parentHeight = window.innerHeight;
      x = p.element.clientX;
      y = p.element.clientY;
    }

    const p2 = {
      cursor: p.element,
      data: p.data,
      parentWidth,
      parentHeight,
      x,
      y,
      hasParent: !!p.parent,
      portalId,
    };

    setPosRaw(p2);
  };

  return {
    Comp,
    setPos,
    pos,
  };
};
