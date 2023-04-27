// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Close } from '../src/ui/components/Close';

export default {
  title: 'UI/Close',
  component: Close,
} as Meta<typeof Close>;

const Template: StoryFn<typeof Close> = (args) => <Close {...args} />;

export const Primary = Template.bind({}) as StoryFn<typeof Close>;
Primary.args = {};
