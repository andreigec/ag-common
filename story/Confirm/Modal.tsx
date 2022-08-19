/* eslint-disable no-alert */
import { IConfirmModal, ConfirmModal } from '../../src/ui/components/Confirm';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/Confirm',
  component: ConfirmModal,
} as ComponentMeta<typeof ConfirmModal>;

const TemplateModal: ComponentStory<typeof ConfirmModal> = (args) => (
  <ConfirmModal {...args} />
);

export const Modal = TemplateModal.bind({});
const args: IConfirmModal = {
  bottomText: 'bottom',
  onSubmit: (e) => {
    alert('res=' + e);
  },
};

Modal.args = args;
