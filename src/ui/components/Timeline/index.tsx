import styled from '@emotion/styled';
import React from 'react';

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
  background-color: white;
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
  circleSize,
  items,
  onClick,
}: {
  /** default fits, max 10rem */
  circleSize?: string;
  /** default #ccc */
  lineColour?: string;
  items: ITimelineItem[];
  onClick?: (p: ITimelineItem) => void;
}) => {
  const cs = {
    maxWidth: '5rem',
    ...(circleSize && { width: circleSize, maxWidth: circleSize }),
  };
  const firstFalse = items.findIndex((i) => !i.checked && !i.disabled);
  return (
    <Base>
      <Row>
        <Line style={{ backgroundColor: lineColour }} />
        {items.map((p, index) => {
          const enabled = p.checked || index === firstFalse;
          return (
            <Item key={p.key} title={p.title}>
              <Icon
                style={{ ...cs, cursor: enabled ? 'pointer' : 'default' }}
                onClick={() => enabled && onClick?.(p)}
              >
                {p.checked ? (
                  <Checkmark style={{ fill: '#60b515' }} />
                ) : index !== firstFalse ? (
                  <Circle style={{ fill: '#007cbb' }} dotted={p.disabled} />
                ) : (
                  <CircleDot style={{ fill: '#007cbb' }} />
                )}
              </Icon>
            </Item>
          );
        })}
      </Row>
      {items.find((i) => i.title) && (
        <Row style={{ marginTop: '1rem' }}>
          {items.map(({ title, key }) => (
            <Title key={key} style={{ width: `${100 / items.length}%`, ...cs }}>
              {title || ''}
            </Title>
          ))}
        </Row>
      )}
    </Base>
  );
};
