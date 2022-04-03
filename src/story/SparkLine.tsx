import { SparkLine } from '../ui/components/SparkLine';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/SparkLine',
  component: SparkLine,
} as ComponentMeta<typeof SparkLine>;

const Template: ComponentStory<typeof SparkLine> = (args) => (
  <SparkLine {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
