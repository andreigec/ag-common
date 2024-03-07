/* eslint-disable no-alert */
// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { DropdownList } from '../../src/ui/components/DropdownList';
import type { IDropdownList } from '../../src/ui/components/DropdownList/types';

const base: Meta<typeof DropdownList> = {
  title: 'UI/DropdownList',
  component: DropdownList,
};

const Template: StoryFn<typeof DropdownList<string>> = (args) => (
  <DropdownList {...args} />
);

export const Value: StoryFn<typeof DropdownList<string>> = Template.bind({});

Value.args = {
  options: ['LONG VALUEEEE', '1', '3'],
  value: 'LONG VALUEEEE',
  placeholder: 'test ph',
  onChange: (a, b) => alert(`item=${a} index=${b}`),
  renderF: (r) => (
    <div style={{ width: '50px', height: '50px' }}>{r as string}</div>
  ),
} satisfies IDropdownList<string>;
export default base;

export const DefaultWithArgs = () => (
  <Value {...(Value.args as IDropdownList<string>)} />
);
