import { LogoutButton } from '../src/ui/components/LogoutButton';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/LogoutButton',
  component: LogoutButton,
} as ComponentMeta<typeof LogoutButton>;

const Template: ComponentStory<typeof LogoutButton> = (args) => (
  <LogoutButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
