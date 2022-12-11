/* eslint-disable no-alert */
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { PromptModal } from '../../src/ui/components/Prompt/Modal';

export default {
  title: 'UI/Prompt',
  component: PromptModal,
} as ComponentMeta<typeof PromptModal>;

const TemplateModal: ComponentStory<typeof PromptModal> = (args) => (
  <PromptModal {...args} />
);

export const Modal = TemplateModal.bind({}) as ComponentStory<
  typeof PromptModal
>;

Modal.args = {
  bottomText: 'bottom',
  topText: 'top',
  res: (v) => alert('res=' + v),
};
