import { DropdownList } from '../src/ui/components/DropdownList';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/DropdownList',
  component: DropdownList,
} as ComponentMeta<typeof DropdownList>;

const Template: ComponentStory<typeof DropdownList> = (args) => (
  <DropdownList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  options: ['1', '2', '3'],
  renderF: (v) => v as string,
};
