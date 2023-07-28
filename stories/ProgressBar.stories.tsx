// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { ProgressBar } from '../src/ui/components/ProgressBar';

const base: Meta<typeof ProgressBar> = {
  title: 'UI/ProgressBar',
  component: ProgressBar,
};

const Template: StoryFn<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Primary: StoryFn<typeof ProgressBar> = Template.bind({});
Primary.args = { min: 1, max: 5 };
export default base;
