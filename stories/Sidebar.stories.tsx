// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { ISidebar } from '../src/ui/components/Sidebar';
import { Sidebar } from '../src/ui/components/Sidebar';

const app: Meta<typeof Sidebar> = {
  title: 'UI/Sidebar',
  component: Sidebar,
};

const Template: StoryFn<typeof Sidebar> = (args) => (
  <div style={{ backgroundColor: '#333', height: '20rem' }}>
    <Sidebar {...args} />
  </div>
);
export const Primary: StoryFn<typeof Sidebar> = Template.bind({});

Primary.args = {
  children: (
    <>
      <div style={{ backgroundColor: '#666' }}>sidebar item</div>
      <div>sidebar item2</div>
    </>
  ),
  mode: 'fixedOpen',
} satisfies ISidebar;
export default app;
