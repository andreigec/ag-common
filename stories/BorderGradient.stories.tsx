// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { BorderGradient } from '../src/ui/components/BorderGradient';

const base: Meta<typeof BorderGradient> = {
  title: 'UI/BorderGradient',
  component: BorderGradient,
};

const Template: StoryFn<typeof BorderGradient> = (args) => (
  <BorderGradient {...args} />
);

export const Primary: StoryFn<typeof BorderGradient> = Template.bind({});

Primary.args = {
  disabled: false,
  children: <div>test child</div>,
  left: 'black',
  right: 'white',
};
export default base;
