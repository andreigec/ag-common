import { Table } from '../src/ui/components/Table';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => Table(args);

export const Primary = Template.bind({});
Primary.args = {
  children: [
    { content: <div>content</div>, groupTitle: 'group' },
    { content: <div>content1</div>, groupTitle: 'group1' },
    { content: <div>content2</div>, groupTitle: 'group1' },
  ],
};
