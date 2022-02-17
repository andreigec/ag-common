import { groupByList } from '../../../common/helpers/groupBy';
import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

const Row = styled.div`
  border: solid 1px #ccc;
`;

const Group = styled.div`
  display: flex;
  flex-flow: column;
`;

const GroupTitle = styled.div`
  font-size: 1.5rem;
`;

export interface TableItem {
  content: JSX.Element;
  groupTitle: string;
}

export const Table = ({
  children,
  className,
}: {
  children: TableItem[];
  className?: string;
}) => {
  const grouped = groupByList(children, (s) => s.groupTitle);

  return (
    <Base className={className}>
      {grouped.map((group) => (
        <Group key={group.key}>
          <GroupTitle>{group.key}</GroupTitle>
          {group.items.map((item) => (
            <Row key={item.content.key}>{item.content}</Row>
          ))}
        </Group>
      ))}
    </Base>
  );
};
