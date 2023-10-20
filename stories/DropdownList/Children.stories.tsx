/* eslint-disable no-alert */
// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { DropdownList } from '../../src/ui/components/DropdownList';

const base: Meta<typeof DropdownList> = {
  title: 'UI/DropdownList',
  component: DropdownList,
};

const Template: StoryFn<typeof DropdownList> = (args) => (
  <div style={{ width: '5rem', marginLeft: '5rem' }}>
    <DropdownList {...args} />
  </div>
);

export const Children: StoryFn<typeof DropdownList> = Template.bind({});

Children.args = {
  options: ['LONG VALUEEEE', '1', '3'],
  value: 'LONG VALUEEEE',
  placeholder: 'test ph',
  children: <>test dropdown</>,
  onChange: (a, b) => alert(`item=${a} index=${b}`),
  renderF: (r) => <div>{r as string}</div>,
};
export default base;
