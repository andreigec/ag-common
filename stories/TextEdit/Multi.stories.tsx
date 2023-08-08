/* eslint-disable no-alert */
// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { TextEdit } from '../../src/ui/components/TextEdit';

const base: Meta<typeof TextEdit> = {
  title: 'UI/TextEdit',
  component: TextEdit,
};

const Template: StoryFn<typeof TextEdit> = (args) => (
  <div style={{ backgroundColor: 'white', padding: '0.5rem' }}>
    <TextEdit {...args} />
  </div>
);

export const Multi: StoryFn<typeof TextEdit> = Template.bind({});

Multi.args = {
  singleLine: false,
  maxLength: 20,
  defaultEditing: {
    focus: true,
  },
  onSubmit: (s) => alert('ret=' + JSON.stringify(s, null, 2)),
};
export default base;
