/* eslint-disable no-alert */
// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { IDarkMode } from '../src/ui/components/DarkMode';
import { DarkMode } from '../src/ui/components/DarkMode';

const base: Meta<typeof DarkMode> = {
  title: 'UI/DarkMode',
  component: DarkMode,
};

const Template: StoryFn<IDarkMode> = (args) => (
  <div style={{ backgroundColor: 'white', padding: '0.5rem' }}>
    <DarkMode {...args} />
  </div>
);

export const Primary: StoryFn<IDarkMode> = Template.bind({});

Primary.args = {
  onSubmit: (m) => alert('mode=' + m),
  iconSize: '2rem',
  cookieDocument: '',
} satisfies IDarkMode;
export default base;

export const DefaultWithArgs = () => (
  <Primary {...(Primary.args as IDarkMode)} />
);
