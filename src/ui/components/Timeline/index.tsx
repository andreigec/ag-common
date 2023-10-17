'use client';
import styled from '@emotion/styled';
import React from 'react';

import { findLastIndex } from '../../../common/helpers/array';
import { Checkmark, CircleDot } from '../../icons';
import { Circle } from '../../icons/Circle';
import { Icon } from '../Icon';

const Base = styled.div`
  width: 100%;
  overflow: hidden;
`;
const Row = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Line = styled.div`
  position: absolute;
  top: 45%;
  height: 10%;
  left: 0;
  right: 0;
`;

const Item = styled.div`
  z-index: 1;
  background-color: transparent;
  width: fit-content;
  height: 100%;
  display: flex;
  flex-flow: column;
`;

const Title = styled.span`
  text-align: center;
`;

export type ITimelineItem = {
  key: string;
  title?: string;
} & (
  | { checked: true }
  | {
      checked: false;
      disabled?: boolean;
    }
);

export const Timeline = ({
  lineColour = '#ccc',
  items,
  onClick,
  maxCircleSize = 'min(5vw,3rem)',
  className,
  bgColour = 'white',
  titleHover,
  showTitles,
}: {
  /** default min(5vw,3rem) */
  maxCircleSize?: string;
  /** default #ccc */
  lineColour?: string;
  items: ITimelineItem[];
  onClick?: (p: ITimelineItem) => void;
  className?: string;
  /** used for behind icons. default white */
  bgColour?: string;
  /* provides title text from hover item* */
  titleHover?: (i: ITimelineItem) => string;
  /** if true, will show titles under timeline. default false */
  showTitles?: boolean;
}) => {
  const firstFalse = items.findIndex((i) => !i.checked && !i.disabled);
  const lastTrue = findLastIndex(items, (i) => i.checked);
  return (
    <Base className={className}>
      <Row>
        <Line style={{ backgroundColor: lineColour }} />
        {items.map((p, index) => {
          const enabled = index === lastTrue || index === firstFalse;
          return (
            <Item key={p.key} title={titleHover?.(p)}>
              <Icon
                style={{
                  maxWidth: maxCircleSize,
                  cursor: enabled ? 'pointer' : 'default',
                }}
                onClick={() => enabled && onClick?.(p)}
              >
                {p.checked ? (
                  <Checkmark
                    style={{ fill: '#60b515', backgroundColor: bgColour }}
                  />
                ) : index !== firstFalse ? (
                  <Circle
                    style={{ fill: '#007cbb', backgroundColor: bgColour }}
                    dotted={p.disabled}
                  />
                ) : (
                  <CircleDot
                    style={{ fill: '#007cbb', backgroundColor: bgColour }}
                  />
                )}
              </Icon>
            </Item>
          );
        })}
      </Row>
      {showTitles && items.find((i) => i.title) && (
        <Row style={{ marginTop: '1rem' }}>
          {items.map(({ title, key }) => (
            <Title
              key={key}
              style={{
                width: `${100 / items.length}%`,
                maxWidth: maxCircleSize,
              }}
            >
              {title || ''}
            </Title>
          ))}
        </Row>
      )}
    </Base>
  );
};
