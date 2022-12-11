/* eslint-disable no-alert */
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ConfirmModal } from '../../src/ui/components/Confirm';

export default {
  title: 'UI/Confirm',
  component: ConfirmModal,
} as ComponentMeta<typeof ConfirmModal>;

const TemplateModal: ComponentStory<typeof ConfirmModal> = (args) => (
  <ConfirmModal {...args} />
);

export const Modal = TemplateModal.bind({}) as ComponentStory<
  typeof ConfirmModal
>;

Modal.args = {
  bottomText: 'bottom',
  onSubmit: (e) => {
    alert('res=' + e);
  },
};
