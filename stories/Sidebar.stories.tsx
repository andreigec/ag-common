// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Sidebar } from '../src/ui/components/Sidebar';

const app: Meta<typeof Sidebar> = {
  title: 'UI/Sidebar',
  component: Sidebar,
};

const Template: StoryFn<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Primary: StoryFn<typeof Sidebar> = Template.bind({});

Primary.args = {
  children: (
    <>
      <div>sidebar item</div>
      <div>sidebar item2</div>
    </>
  ),
};
export default app;
