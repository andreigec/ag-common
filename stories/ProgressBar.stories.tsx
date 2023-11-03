// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { IProgressBar } from '../src/ui/components/ProgressBar';
import { ProgressBar } from '../src/ui/components/ProgressBar';

const base: Meta<typeof ProgressBar> = {
  title: 'UI/ProgressBar',
  component: ProgressBar,
};

const Template: StoryFn<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Primary: StoryFn<typeof ProgressBar> = Template.bind({});
Primary.args = { min: 1, max: 5 } satisfies IProgressBar;
export default base;

export const DefaultWithArgs = () => (
  <Primary {...(Primary.args as IProgressBar)} />
);
