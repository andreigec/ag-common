import { Button, IButton } from '../src/ui/components/Button';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
const args: IButton = {
  invert: false,
  children: 'hello world',
};

Primary.args = args;
