'use client';
import styled from '@emotion/styled';
import type { JSX } from 'react';
import React from 'react';

import { groupByList } from '../../../common/helpers/groupBy';

const Base = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
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
  width: 100%;
`;

const GroupTitle = styled.div`
  font-size: 1.5rem;
`;

const GroupWrap = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

export interface ITableItem {
  content: JSX.Element;
  groupTitle?: string;
}

export interface ITable {
  children: ITableItem[];
  className?: string;
  headerRow?: JSX.Element;
}
export const Table = ({ children, className, headerRow }: ITable) => {
  const grouped = groupByList(children, (s) => s.groupTitle);

  return (
    <Base className={className}>
      {grouped.map((group) => (
        <GroupWrap key={'gk' + group.key}>
          {group.key && (
            <GroupTitle key={`gt${group.key}`}>{group.key}</GroupTitle>
          )}
          <Group key={`g${group.key}`}>
            {headerRow && (
              <TableRow data-header="true" key={`headrow${group.key}`}>
                {headerRow}
              </TableRow>
            )}
            {group.items.map((item) => (
              <TableRow key={item.content.key}>{item.content}</TableRow>
            ))}
          </Group>
        </GroupWrap>
      ))}
    </Base>
  );
};
