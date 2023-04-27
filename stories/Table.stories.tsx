// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Table } from '../src/ui/components/Table';

export default {
  title: 'UI/Table',
  component: Table,
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = (args) => Table(args);

export const Primary = Template.bind({}) as StoryFn<typeof Table>;

Primary.args = {
  children: [
    { content: <div>content</div>, groupTitle: 'group' },
    { content: <div>content1</div>, groupTitle: 'group1' },
    { content: <div>content2</div>, groupTitle: 'group1' },
  ],
};
