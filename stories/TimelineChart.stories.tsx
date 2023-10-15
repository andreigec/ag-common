// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { TimelineChart } from '../src/ui/components/TimelineChart';

const base: Meta<typeof TimelineChart> = {
  title: 'UI/TimelineChart',
  component: TimelineChart,
};
const Template: StoryFn<typeof TimelineChart> = (args) => (
  <div style={{ border: 'solid 1px black' }}>
    <TimelineChart {...args} />
  </div>
);

export const Primary: StoryFn<typeof TimelineChart> = Template.bind({});

Primary.args = {
  strokeWidth: 20,
  series: [
    {
      color: 'red',
      key: '1',
      label: '1',
      title: 't1',
      data: [
        1626255897000, 1626341814000, 1626428916000, 1626477336000,
        1626562026000, 1626687441000, 1626774351000, 1626860264000,
        1626947725000, 1627033226000, 1627080208000, 1627167580000,
        1627294417000,
      ].map((x) => ({ y: 0, x })),
    },
    {
      color: 'blue',
      key: '2',
      label: '2',
      title: 't2',
      data: [{ x: new Date().getTime(), y: 0 }],
    },
    {
      color: 'green',
      key: '3',
      label: '3',
      title: 't3',
      data: [{ x: new Date().getTime(), y: 1 }],
    },
  ],
};
export default base;
