// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { BorderGradient } from '../src/ui/components/BorderGradient';

export default {
  title: 'UI/BorderGradient',
  component: BorderGradient,
} as Meta<typeof BorderGradient>;

const Template: StoryFn<typeof BorderGradient> = (args) => (
  <BorderGradient {...args} />
);

export const Primary = Template.bind({}) as StoryFn<typeof BorderGradient>;

Primary.args = {
  disabled: false,
  children: <div>test child</div>,
};
