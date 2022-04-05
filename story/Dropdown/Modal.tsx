import { DropdownModal } from '../../src/ui/components/Dropdown/Modal';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/Dropdown',
  component: DropdownModal,
} as ComponentMeta<typeof DropdownModal>;

const Template: ComponentStory<typeof DropdownModal> = (args) => (
  <DropdownModal {...args} />
);

export const Modal = Template.bind({});
Modal.args = {
  options: ['1', '2', '3'],
  open: true,
};
