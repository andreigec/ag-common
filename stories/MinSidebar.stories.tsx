// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { IMinSidebar } from '../src/ui/components/MinSidebar';
import { MinSidebar } from '../src/ui/components/MinSidebar';

const app: Meta<typeof MinSidebar> = {
  title: 'UI/MinSidebar',
  component: MinSidebar,
};

const Template: StoryFn<typeof MinSidebar> = (args) => (
  <div style={{ backgroundColor: '#333', height: '20rem' }}>
    <MinSidebar {...args} style={{ backgroundColor: '#ccc' }} />
  </div>
);
export const Primary: StoryFn<typeof MinSidebar> = Template.bind({});

Primary.args = {
  children: ({ open }) => (
    <div>
      <div style={{ backgroundColor: '#666' }}>
        <div>S</div>
        {open && <div>adsdasadsadsfull</div>}
      </div>
      <div>
        <div>S2</div>
        {open && <div>fadssdaasdasdull2</div>}
      </div>
    </div>
  ),
  chevronColour: 'red',
} satisfies IMinSidebar;
export default app;
