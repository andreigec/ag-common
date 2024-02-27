// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { BarChart } from '../src/ui/components/BarChart';

const base: Meta<typeof BarChart> = {
  title: 'UI/BarChart',
  component: BarChart,
};

const Template: StoryFn<typeof BarChart> = (args) => <BarChart {...args} />;

export const Primary: StoryFn<typeof BarChart> = Template.bind({});

Primary.args = {
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
};
export default base;
