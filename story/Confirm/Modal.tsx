import { ConfirmModal } from '../../src/ui/components/Confirm/Modal';
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
Modal.args = {};
