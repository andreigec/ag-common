import { ISidebar, Sidebar } from '../src/ui/components/Sidebar';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Primary = Template.bind({});
const args: ISidebar = {
  children: (
    <>
      <div>sidebar item</div>
      <div>sidebar item2</div>
    </>
  ),
};

Primary.args = args;
