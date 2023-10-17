/* eslint-disable no-alert */
// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { CheckboxEdit } from '../../src/ui/components/TextEdit';

const base: Meta<typeof CheckboxEdit> = {
  title: 'UI/TextEdit',
  component: CheckboxEdit,
};

const Template: StoryFn<typeof CheckboxEdit> = (args) => (
  <div style={{ backgroundColor: 'white', padding: '0.5rem' }}>
    <CheckboxEdit {...args} />
  </div>
);

export const CheckboxEditF: StoryFn<typeof CheckboxEdit> = Template.bind({});

CheckboxEditF.args = {
  defaultValue: true,
  onSubmit: (s) => alert('ret=' + JSON.stringify(s, null, 2)),
  rightSpan: <span style={{ color: 'red' }}>hello</span>,
};
export default base;
