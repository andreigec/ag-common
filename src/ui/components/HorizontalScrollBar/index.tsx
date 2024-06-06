'use client';
import React, { useEffect, useRef } from 'react';

export const HorizontalScrollBar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const handleScroll = (e: WheelEvent) => {
      const { current } = scrollRef;
      if (!current) return;

      e.preventDefault();
      current.scrollLeft += e.deltaY;
    };

    scrollRef.current.addEventListener('wheel', handleScroll);

    return () => {
      try {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        scrollRef.current?.removeEventListener('wheel', handleScroll);
      } catch (e) {
        //
      }
    };
  }, [scrollRef]);

  return (
    <div ref={scrollRef} style={{ overflowX: 'auto' }} className={className}>
      {children}
    </div>
  );
};
