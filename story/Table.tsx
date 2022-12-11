// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Table } from '../src/ui/components/Table';

export default {
  title: 'UI/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => Table(args);

export const Primary = Template.bind({}) as ComponentStory<typeof Table>;

Primary.args = {
  children: [
    { content: <div>content</div>, groupTitle: 'group' },
    { content: <div>content1</div>, groupTitle: 'group1' },
    { content: <div>content2</div>, groupTitle: 'group1' },
  ],
};
