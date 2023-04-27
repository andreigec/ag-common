// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Loader } from '../src/ui/components/Loader';

export default {
  title: 'UI/Loader',
  component: Loader,
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args) => <Loader {...args} />;

export const Primary = Template.bind({}) as StoryFn<typeof Loader>;

Primary.args = {
  name: 'test loader',
};
