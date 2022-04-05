import { LoginButton } from '../src/ui/components/LoginButton';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/LoginButton',
  component: LoginButton,
} as ComponentMeta<typeof LoginButton>;

const Template: ComponentStory<typeof LoginButton> = (args) => (
  <LoginButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  loginPath: () => '#test',
  text: 'test',
};
