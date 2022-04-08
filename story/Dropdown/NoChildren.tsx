import { Dropdown } from '../../src/ui/components/Dropdown';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const NoChildren = Template.bind({});
NoChildren.args = {
  options: ['1', '2', '3'],
  enableHoverOpen: false,
  topPosition: 'top',
  position: 'right',
};