/* eslint-disable no-alert */
// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { PromptModal } from '../../src/ui/components/Prompt/Modal';

const base: Meta<typeof PromptModal> = {
  title: 'UI/Prompt',
  component: PromptModal,
};

const TemplateModal: StoryFn<typeof PromptModal> = (args) => (
  <PromptModal {...args} />
);

export const Modal: StoryFn<typeof PromptModal> = TemplateModal.bind({});

Modal.args = {
  bottomText: 'bottom',
  topText: 'top',
  res: (v) => alert('res=' + v),
};
export default base;
