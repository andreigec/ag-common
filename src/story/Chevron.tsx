import { Chevron } from '../ui/components/Chevron';
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
Up.args = {
  point: 'up',
};

export const Left = Template.bind({});
Left.args = {
  point: 'left',
};

export const Right = Template.bind({});
Right.args = {
  point: 'right',
};

export const Down = Template.bind({});
Down.args = {
  point: 'down',
};
