// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { BorderGradient } from '../src/ui/components/BorderGradient';

export default {
  title: 'UI/BorderGradient',
  component: BorderGradient,
} as ComponentMeta<typeof BorderGradient>;

const Template: ComponentStory<typeof BorderGradient> = (args) => (
  <BorderGradient {...args} />
);

export const Primary = Template.bind({}) as ComponentStory<
  typeof BorderGradient
>;

Primary.args = {
  disabled: false,
  children: <div>test child</div>,
};
