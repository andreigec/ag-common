// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { ProgressBar } from '../src/ui/components/ProgressBar';

export default {
  title: 'UI/ProgressBar',
  component: ProgressBar,
} as Meta<typeof ProgressBar>;

const Template: StoryFn<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Primary = Template.bind({}) as StoryFn<typeof ProgressBar>;
Primary.args = { min: 1, max: 5 };
