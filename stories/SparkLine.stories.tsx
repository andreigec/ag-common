// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { SparkLine } from '../src/ui/components/SparkLine';

export default {
  title: 'UI/SparkLine',
  component: SparkLine,
} as Meta<typeof SparkLine>;

const Template: StoryFn<typeof SparkLine> = (args) => (
  <div style={{ width: '20rem', height: '4rem' }}>
    <SparkLine {...args} />
  </div>
);

export const Primary = Template.bind({}) as StoryFn<typeof SparkLine>;

Primary.args = {
  data: [
    { x: 1, y: 0 },
    { x: 5, y: 5 },
    { x: 10, y: 1 },
  ],
  pointTitleF: (v) => JSON.stringify(v),
  pointColour: 'red',
};
