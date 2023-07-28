// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Close } from '../src/ui/components/Close';

const base: Meta<typeof Close> = {
  title: 'UI/Close',
  component: Close,
};

const Template: StoryFn<typeof Close> = (args) => <Close {...args} />;

export const Primary: StoryFn<typeof Close> = Template.bind({});
Primary.args = {};
export default base;
