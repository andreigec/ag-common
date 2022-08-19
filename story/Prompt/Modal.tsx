/* eslint-disable no-alert */
import { PromptModal } from '../../src/ui/components/Prompt/Modal';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

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
