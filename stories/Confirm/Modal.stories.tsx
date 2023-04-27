/* eslint-disable no-alert */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { ConfirmModal } from '../../src/ui/components/Confirm';

export default {
  title: 'UI/Confirm',
  component: ConfirmModal,
} as Meta<typeof ConfirmModal>;

const TemplateModal: StoryFn<typeof ConfirmModal> = (args) => (
  <ConfirmModal {...args} />
);

export const Modal = TemplateModal.bind({}) as StoryFn<typeof ConfirmModal>;

Modal.args = {
  bottomText: 'bottom',
  onSubmit: (e) => {
    alert('res=' + e);
  },
};
