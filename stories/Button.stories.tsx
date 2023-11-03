// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { IButton } from '../src/ui/components/Button';
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
} satisfies IButton;
export default base;

export const DefaultWithArgs = () => (
  <Primary {...Primary.args}>{Primary.args?.children || ''}</Primary>
);
