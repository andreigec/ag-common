import { Chevron, IChevron } from '../src/ui/components/Chevron';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/Chevron',
  component: Chevron,
} as ComponentMeta<typeof Chevron>;

const Template: ComponentStory<typeof Chevron> = (args) => (
  <Chevron {...args} />
);

export const Up = Template.bind({});
const upArgs: IChevron = {
  point: 'up',
};

Up.args = upArgs;

export const Left = Template.bind({});
const leftArgs: IChevron = {
  point: 'left',
};

Left.args = leftArgs;

export const Right = Template.bind({});
const rightArgs: IChevron = {
  point: 'right',
};

Right.args = rightArgs;

export const Down = Template.bind({});
const downArgs: IChevron = {
  point: 'down',
};

Down.args = downArgs;
