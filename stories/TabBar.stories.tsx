/* eslint-disable no-alert */
// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { ITabBar } from '../src/ui/components/TabBar';
import { TabBar } from '../src/ui/components/TabBar';
import { icons } from '../src/ui/icons';

const base: Meta<typeof TabBar> = {
  title: 'UI/TabBar',
  component: TabBar,
};

const Template: StoryFn<ITabBar> = (args) => (
  <>
    <div style={{ backgroundColor: '#111', padding: '0.5rem' }}>
      <TabBar {...args} />
    </div>
  </>
);

export const Primary: StoryFn<ITabBar> = Template.bind({});

Primary.args = {
  items: [
    { icon: icons.Computer, text: 'Home' },
    { icon: icons.Sun, text: 'Test' },
  ],
  cookieDocument: '',
  onChangeIndex: (i) => alert('index=' + i),
  theme: {},
} satisfies ITabBar;
export default base;
