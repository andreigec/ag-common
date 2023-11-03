// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { IBorderGradient } from '../src/ui/components/BorderGradient';
import { BorderGradient } from '../src/ui/components/BorderGradient';

const base: Meta<typeof BorderGradient> = {
  title: 'UI/BorderGradient',
  component: BorderGradient,
};

const Template: StoryFn<typeof BorderGradient> = (args) => (
  <BorderGradient {...args} />
);

export const Primary: StoryFn<IBorderGradient> = Template.bind({});

Primary.args = {
  disabled: false,
  children: <div>test child</div>,
  left: 'black',
  right: 'white',
  padding: '2px',
} satisfies IBorderGradient;
export default base;

export const DefaultWithArgs = () => (
  <Primary {...Primary.args}>{Primary.args?.children || ''}</Primary>
);
