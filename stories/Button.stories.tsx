// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Button } from '../src/ui/components/Button';

const base: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
};

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary: StoryFn<typeof Button> = Template.bind({});

Primary.args = {
  invert: false,
  children: 'hello world',
};
export default base;
