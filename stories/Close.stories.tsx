// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { IClose } from '../src/ui/components/Close';
import { Close } from '../src/ui/components/Close';

const base: Meta<typeof Close> = {
  title: 'UI/Close',
  component: Close,
};

const Template: StoryFn<typeof Close> = (args) => (
  <div
    style={{
      backgroundColor: '#333',
      position: 'relative',
      width: '5rem',
      height: '5rem',
    }}
  >
    <Close {...args} />
  </div>
);

export const Primary: StoryFn<typeof Close> = Template.bind({});
Primary.args = {} satisfies IClose;
export default base;

export const DefaultWithArgs = () => <Primary {...(Primary.args as IClose)} />;
