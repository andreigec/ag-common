import { SparkLine } from '../src/ui/components/SparkLine';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/SparkLine',
  component: SparkLine,
} as ComponentMeta<typeof SparkLine>;

const Template: ComponentStory<typeof SparkLine> = (args) => (
  <div style={{ width: '20rem', height: '4rem' }}>
    <SparkLine {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  data: [
    { x: 1, y: 0 },
    { x: 5, y: 5 },
    { x: 10, y: 1 },
  ],
  pointTitleF: (v) => JSON.stringify(v),
  pointColour: 'red',
};
