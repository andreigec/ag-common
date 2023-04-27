// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Button } from '../src/ui/components/Button';

export default {
  title: 'UI/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({}) as StoryFn<typeof Button>;

Primary.args = {
  invert: false,
  children: 'hello world',
};
