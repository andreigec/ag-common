import { DropdownList } from '../../src/ui/components/DropdownList';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/DropdownList',
  component: DropdownList,
} as ComponentMeta<typeof DropdownList>;

const Template: ComponentStory<typeof DropdownList> = (args) => (
  <div style={{ width: '5rem' }}>
    <DropdownList {...args} />
  </div>
);

export const Open = Template.bind({});
Open.args = {
  options: ['1', '2', '3'],
  renderF: (v) => v as string,
  defaultOpen: true,
};
