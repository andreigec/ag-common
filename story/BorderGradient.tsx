import { BorderGradient } from '../src/ui/components/BorderGradient';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/BorderGradient',
  component: BorderGradient,
} as ComponentMeta<typeof BorderGradient>;

const Template: ComponentStory<typeof BorderGradient> = (args) => (
  <BorderGradient {...args}>
    <div>child</div>
  </BorderGradient>
);

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};
