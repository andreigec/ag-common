import { Close } from '../src/ui/components/Close';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/Close',
  component: Close,
} as ComponentMeta<typeof Close>;

const Template: ComponentStory<typeof Close> = (args) => <Close {...args} />;

export const Primary = Template.bind({}) as ComponentStory<typeof Close>;
Primary.args = {};
