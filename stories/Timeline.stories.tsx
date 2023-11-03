// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { ITimeline } from '../src/ui/components/Timeline';
import { Timeline } from '../src/ui/components/Timeline';

const base: Meta<typeof Timeline> = {
  title: 'UI/Timeline',
  component: Timeline,
};
const Template: StoryFn<ITimeline> = (args) => (
  <div style={{ border: 'solid 1px black', backgroundColor: '#aaa' }}>
    <Timeline {...args} />
  </div>
);

export const Primary: StoryFn<ITimeline> = Template.bind({});

Primary.args = {
  items: [
    { key: '1', checked: true, title: 'a really really really long line ' },
    { key: '2', checked: false, title: 'b', disabled: true },
    { key: '3', checked: false },
    { key: '4', checked: false, title: 'b' },
    { key: '5', checked: false, title: 'c', disabled: true },
  ],
  onClick: (p) => {
    // eslint-disable-next-line no-alert
    alert(`key=${p.key}`);
  },
} satisfies ITimeline;
export default base;

export const DefaultWithArgs = () => (
  <Primary {...(Primary.args as ITimeline)} />
);
