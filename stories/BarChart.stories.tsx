import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { BarChart } from '../src/ui/components/BarChart';

const base: Meta<typeof BarChart> = {
  title: 'UI/BarChart',
  component: BarChart,
};

const Template: StoryFn<typeof BarChart> = (args) => (
  <div>
    <BarChart {...args} />
  </div>
);

export const Primary: StoryFn<typeof BarChart> = Template.bind({});
export const Primary2: StoryFn<typeof BarChart> = Template.bind({});

Primary.args = {
  data: [
    {
      name: 'REALLY LONG VALUE REALLY LONG VALUE REALLY LONG VALUE REALLY LONG VALUE REALLY LONG VALUE REALLY LONG VALUE REALLY LONG VALUE',
      total: 16,
      values: [
        { colour: 'red', name: 'n1', value: 3 },
        { colour: 'red', name: 'n2', value: 3 },
        { colour: 'red', name: 'n3', value: 3 },
        { colour: 'red', name: 'n4', value: 3 },
        { colour: 'red', name: 'n5', value: 1 },
        { colour: 'red', name: 'n6', value: 1 },
        { colour: 'red', name: 'n7', value: 1 },
        { colour: 'red', name: 'n8', value: 1 },
      ],
    },
  ],
  style: { backgroundColor: 'white', borderColor: '#ccc', color: '#111' },
};
Primary2.args = {
  data: [
    {
      name: 'n1',
      total: 16,
      values: [
        { colour: 'red', name: 'n1', value: 3 },
        { colour: 'red', name: 'n2', value: 3 },
        { colour: 'red', name: 'n3', value: 3 },
        { colour: 'red', name: 'n4', value: 3 },
        { colour: 'red', name: 'n5', value: 1 },
        { colour: 'red', name: 'n6', value: 1 },
        { colour: 'red', name: 'n7', value: 1 },
        { colour: 'red', name: 'n8', value: 1 },
      ],
    },
  ],
  style: { backgroundColor: 'black', borderColor: '#333', color: 'white' },
};

export default base;
