// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { ITimelineItem } from '../src/ui/components/Timeline';
import { Timeline } from '../src/ui/components/Timeline';

const base: Meta<typeof Timeline> = {
  title: 'UI/Timeline',
  component: Timeline,
};
const items: ITimelineItem[] = [
  { key: '1', checked: true, title: 'a really really really long line ' },
  { key: '2', checked: false, title: 'b', disabled: true },
  { key: '3', checked: false },
  { key: '4', checked: false, title: 'b' },
  { key: '5', checked: false, title: 'c', disabled: true },
];
const Template: StoryFn<typeof Timeline> = () => (
  <div style={{ border: 'solid 1px black' }}>
    <Timeline
      items={items}
      onClick={(p) => {
        // eslint-disable-next-line no-alert
        alert(`key=${p.key}`);
      }}
    />
  </div>
);

export const Primary: StoryFn<typeof Timeline> = Template.bind({});

Primary.args = {};
export default base;
