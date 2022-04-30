import { DropdownList } from '../../src/ui/components/DropdownList';
import { IDropdownList } from '../../src/ui/components/DropdownList/types';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/DropdownList',
  component: DropdownList,
} as ComponentMeta<typeof DropdownList>;

const Template: ComponentStory<typeof DropdownList> = (args) => (
  <div style={{ width: '5rem', marginLeft: '5rem' }}>
    <DropdownList {...args} />
  </div>
);

export const Value = Template.bind({});
Value.args = {
  options: ['LONG VALUEEEE', '1', '3'],
  renderF: (v) => v as string,
  value: 'LONG VALUEEEE',
  placeholder: 'test ph',
} as IDropdownList<string>;
