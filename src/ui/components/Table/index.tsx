import { groupByList } from '../../../common/helpers/groupBy';
import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

const TableRow = styled.div`
  display: flex;
  border: solid 1px #ccc;
  &[data-header='true'] {
    border-bottom: solid 1px #888;
  }
  &:not(:first-of-type) {
    border-top: 0;
  }
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
  headerRow,
}: {
  children: TableItem[];
  className?: string;
  headerRow?: JSX.Element;
}) => {
  const grouped = groupByList(children, (s) => s.groupTitle);

  return (
    <Base className={className}>
      {grouped.map((group) => (
        <>
          {group.key && (
            <GroupTitle key={`grouptitle${group.key}`}>{group.key}</GroupTitle>
          )}
          <Group key={`group${group.key}`}>
            {headerRow && (
              <TableRow data-header="true" key={`headrow${group.key}`}>
                {headerRow}
              </TableRow>
            )}
            {group.items.map((item) => (
              <TableRow key={item.content.key}>{item.content}</TableRow>
            ))}
          </Group>
        </>
      ))}
    </Base>
  );
};
