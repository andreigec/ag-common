// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { ISparkLine } from '../src/ui/components/SparkLine';
import { SparkLine } from '../src/ui/components/SparkLine';

const base: Meta<typeof SparkLine> = {
  title: 'UI/SparkLine',
  component: SparkLine,
};

const Template: StoryFn<typeof SparkLine> = (args) => (
  <div style={{ width: '4rem', height: '1rem', backgroundColor: '#ccc' }}>
    <SparkLine {...args} />
  </div>
);

export const Primary: StoryFn<typeof SparkLine> = Template.bind({});

Primary.args = {
  data: [
    { x: 1, y: 1 },
    { x: 5, y: 5 },
    { x: 10, y: 1 },
  ],
  pointTitleF: (v) => JSON.stringify(v),
  pointColour: 'red',
} satisfies ISparkLine;
export default base;

export const DefaultWithArgs = () => (
  <Primary {...(Primary.args as ISparkLine)} />
);
