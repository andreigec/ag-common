// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Loader } from '../src/ui/components/Loader';

const base: Meta<typeof Loader> = {
  title: 'UI/Loader',
  component: Loader,
};

const Template: StoryFn<typeof Loader> = (args) => <Loader {...args} />;

export const Primary: StoryFn<typeof Loader> = Template.bind({});

Primary.args = {
  name: 'test loader',
};
export default base;
