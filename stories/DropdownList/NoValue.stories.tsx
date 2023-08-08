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
  <div
    style={{ justifyContent: ' space-between', width: '100%', display: 'flex' }}
  >
    <div style={{ width: '5rem', marginLeft: '5rem' }}>
      <DropdownList {...args} />
    </div>
    <div style={{ width: '5rem', marginLeft: '5rem' }}>
      <DropdownList {...args} />
    </div>
  </div>
);

export const NoValue: StoryFn<typeof DropdownList> = Template.bind({});

NoValue.args = {
  options: ['1', 'LONG VALUEEEE', '3'],
  placeholder: 'test ph',
  onChange: (v) => alert('change=' + JSON.stringify(v, null, 2)),
  renderF: (r) => <div>{r as string}</div>,
};
export default base;
