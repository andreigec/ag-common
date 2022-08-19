/* eslint-disable no-alert */
import { TextEdit, ITextEdit } from '../../src/ui/components/TextEdit';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/TextEdit',
  component: TextEdit,
} as ComponentMeta<typeof TextEdit>;

const Template: ComponentStory<typeof TextEdit> = (args) => (
  <div style={{ backgroundColor: 'white', padding: '0.5rem' }}>
    <TextEdit {...args} />
  </div>
);

export const Single = Template.bind({});
const args: ITextEdit = {
  singleLine: true,
  maxLength: 20,
  defaultEditing: {
    focus: true,
  },
  onSubmit: (s) => alert('ret=' + JSON.stringify(s, null, 2)),
};

Single.args = args;
