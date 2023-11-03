// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { ITextWithButton } from '../src/ui/components/TextWithButton';
import { TextWithButton } from '../src/ui/components/TextWithButton';

const base: Meta<typeof TextWithButton> = {
  title: 'UI/TextWithButton',
  component: TextWithButton,
};

const Template: StoryFn<ITextWithButton> = (args) => TextWithButton(args);

export const Primary: StoryFn<ITextWithButton> = Template.bind({});

Primary.args = {
  // eslint-disable-next-line no-alert
  onSubmit: (c) => alert('sub=' + c),
  placeholder: 'placeholder. will accept length > 3',
  submitText: 'submit text',
  validateF: (v) => v.length > 3,
} satisfies ITextWithButton;
export default base;

export const DefaultWithArgs = () => (
  <Primary {...(Primary.args as ITextWithButton)} />
);
