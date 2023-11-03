/* eslint-disable no-alert */
// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { IRadioGroup } from '../src/ui/components/RadioGroup';
import { RadioGroup } from '../src/ui/components/RadioGroup';

const base: Meta<typeof RadioGroup> = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
};

const Template: StoryFn<IRadioGroup<string>> = (args) => (
  <div style={{ backgroundColor: 'white', padding: '0.5rem' }}>
    <RadioGroup {...args} />
  </div>
);

export const Primary: StoryFn<IRadioGroup<string>> = Template.bind({});

Primary.args = {
  defaultIndex: 0,
  values: ['1', '2', '3'],
  onSubmit: (s) => alert('ret=' + JSON.stringify(s, null, 2)),
} satisfies IRadioGroup<string>;
export default base;
