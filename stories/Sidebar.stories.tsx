// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Sidebar } from '../src/ui/components/Sidebar';

export default {
  title: 'UI/Sidebar',
  component: Sidebar,
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Primary = Template.bind({}) as StoryFn<typeof Sidebar>;

Primary.args = {
  children: (
    <>
      <div>sidebar item</div>
      <div>sidebar item2</div>
    </>
  ),
};
