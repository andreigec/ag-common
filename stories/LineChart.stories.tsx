// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { LineChart } from '../src/ui/components/LineChart';
import { colours, LCD } from './LineChart.data';

const base: Meta<typeof LineChart> = {
  title: 'UI/LineChart',
  component: LineChart,
};

const Template: StoryFn<typeof LineChart> = (args) => (
  <div style={{ width: '100%', height: '40vh' }}>
    <LineChart {...args} />
  </div>
);

export const Primary: StoryFn<typeof LineChart> = Template.bind({});

Primary.args = {
  colours: colours,
  data: LCD,
};
export default base;
