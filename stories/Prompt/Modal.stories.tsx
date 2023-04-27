/* eslint-disable no-alert */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { PromptModal } from '../../src/ui/components/Prompt/Modal';

export default {
  title: 'UI/Prompt',
  component: PromptModal,
} as Meta<typeof PromptModal>;

const TemplateModal: StoryFn<typeof PromptModal> = (args) => (
  <PromptModal {...args} />
);

export const Modal = TemplateModal.bind({}) as StoryFn<typeof PromptModal>;

Modal.args = {
  bottomText: 'bottom',
  topText: 'top',
  res: (v) => alert('res=' + v),
};
