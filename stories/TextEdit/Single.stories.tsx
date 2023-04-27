/* eslint-disable no-alert */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { TextEdit } from '../../src/ui/components/TextEdit';

export default {
  title: 'UI/TextEdit',
  component: TextEdit,
} as Meta<typeof TextEdit>;

const Template: StoryFn<typeof TextEdit> = (args) => (
  <div style={{ backgroundColor: 'white', padding: '0.5rem' }}>
    <TextEdit {...args} />
  </div>
);

export const Single = Template.bind({}) as StoryFn<typeof TextEdit>;

Single.args = {
  singleLine: true,
  maxLength: 20,
  defaultEditing: {
    focus: true,
  },
  onSubmit: (s) => alert('ret=' + JSON.stringify(s, null, 2)),
};
