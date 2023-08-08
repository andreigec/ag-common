// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { SparkLine } from '../src/ui/components/SparkLine';

const base: Meta<typeof SparkLine> = {
  title: 'UI/SparkLine',
  component: SparkLine,
};

const Template: StoryFn<typeof SparkLine> = (args) => (
  <div style={{ width: '20rem', height: '4rem' }}>
    <SparkLine {...args} />
  </div>
);

export const Primary: StoryFn<typeof SparkLine> = Template.bind({});

Primary.args = {
  data: [
    { x: 1, y: 0 },
    { x: 5, y: 5 },
    { x: 10, y: 1 },
  ],
  pointTitleF: (v) => JSON.stringify(v),
  pointColour: 'red',
};
export default base;
