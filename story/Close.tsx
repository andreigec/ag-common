// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Close } from '../src/ui/components/Close';

export default {
  title: 'UI/Close',
  component: Close,
} as ComponentMeta<typeof Close>;

const Template: ComponentStory<typeof Close> = (args) => <Close {...args} />;

export const Primary = Template.bind({}) as ComponentStory<typeof Close>;
Primary.args = {};
