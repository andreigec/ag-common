/* eslint-disable no-alert */
// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { IConfirmModal } from '../../src/ui/components/Confirm';
import { ConfirmModal } from '../../src/ui/components/Confirm';

const base: Meta<typeof ConfirmModal> = {
  title: 'UI/Confirm',
  component: ConfirmModal,
};

const TemplateModal: StoryFn<typeof ConfirmModal> = (args) => (
  <ConfirmModal {...args} />
);

export const Modal: StoryFn<typeof ConfirmModal> = TemplateModal.bind({});

Modal.args = {
  bottomText: 'bottom',
  onSubmit: (e) => {
    alert('res=' + e);
  },
} satisfies IConfirmModal;
export default base;
