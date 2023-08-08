// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Table } from '../src/ui/components/Table';

const base: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
};

const Template: StoryFn<typeof Table> = (args) => Table(args);

export const Primary: StoryFn<typeof Table> = Template.bind({});

Primary.args = {
  children: [
    { content: <div>content</div>, groupTitle: 'group' },
    { content: <div>content1</div>, groupTitle: 'group1' },
    { content: <div>content2</div>, groupTitle: 'group1' },
  ],
};
export default base;
