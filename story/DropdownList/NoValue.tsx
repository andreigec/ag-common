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

export const NoValue = Template.bind({});
NoValue.args = {
  options: ['1', 'LONG VALUEEEE', '3'],
  renderF: (v) => v as string,
  placeholder: 'test ph',
} as IDropdownList<string>;
