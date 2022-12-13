import styled from '@emotion/styled';
import React, { createRef, useEffect, useState } from 'react';

import { debounce } from '../../helpers/debounce';
import { filterDataProps } from '../../helpers/dom';

const Base = styled.div`
  overflow-y: auto;
  height: 100%;
  width: 100%;
`;
//if we see this, then we havent shown user enough items - allow click to load more
const LoadMore = styled.div`
  cursor: pointer;
  text-decoration: underline;
`;
export interface IInfiniteScrollList {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any[];
  className?: string;
  startIndex?: number;
  onScroll?: (e: { scrollTop: number; isDown: boolean }) => void;
  /** how many to initially show, and to add per scroll. default 10 */
  incrementNumber?: number;
}
export const InfiniteScrollList = (p: IInfiniteScrollList) => {
  const { incrementNumber = 10 } = p;
  const ref = createRef<HTMLDivElement>();
  const [startIndex] = useState(p.startIndex ?? 0);
  const [endIndex, setEndIndex] = useState<number>(
    (startIndex ?? 0) + incrementNumber,
  );
  const [startScrollTop, setStartScrollTop] = useState(0);

  const handleScrollTop = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    const hasReachedEnd = scrollTop + clientHeight === scrollHeight;
    if (hasReachedEnd) {
      setEndIndex(endIndex + incrementNumber);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setStartScrollTop(ref.current!.scrollTop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const sliced = p.children.slice(0, endIndex);

  const lastDisplayIndex = Math.min(p.children.length, endIndex);

  return (
    <Base
      ref={ref}
      className={p.className}
      onScroll={(e) => {
        const { scrollTop } = e.currentTarget;
        handleScrollTop(e);
        //
        debounce(
          () => {
            setStartScrollTop(scrollTop);
            p?.onScroll?.({ scrollTop, isDown: startScrollTop < scrollTop });
          },
          {
            key: 'in-scr',
            time: 50,
          },
        );
      }}
      {...filterDataProps(p)}
    >
      {sliced}
      {`Showing ${lastDisplayIndex} of ${p.children.length} results`}
      {lastDisplayIndex < p.children.length && (
        <LoadMore onClick={() => setEndIndex(endIndex + incrementNumber)}>
          Load More?
        </LoadMore>
      )}
    </Base>
  );
};
