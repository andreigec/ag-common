// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ProgressBar } from '../src/ui/components/ProgressBar';

export default {
  title: 'UI/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Primary = Template.bind({}) as ComponentStory<typeof ProgressBar>;
Primary.args = { min: 1, max: 5 };
