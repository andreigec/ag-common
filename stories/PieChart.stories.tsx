// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { IPieChart } from '../src/ui/components/PieChart';
import { PieChart } from '../src/ui/components/PieChart';

const base: Meta<typeof PieChart> = {
  title: 'UI/PieChart',
  component: PieChart,
};

const Template: StoryFn<typeof PieChart> = (args) => (
  <div style={{ backgroundColor: '#ccc', position: 'relative' }}>
    test content
    <PieChart {...args} />
    test content
  </div>
);

export const Primary: StoryFn<typeof PieChart> = Template.bind({});

Primary.args = {
  data: [
    { color: 'red', label: 'a', value: 1 },
    { color: 'green', label: 'a', value: 2 },
  ],
} satisfies IPieChart;
export default base;

export const DefaultWithArgs = () => (
  <Primary {...(Primary.args as IPieChart)} />
);
