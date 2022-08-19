import { Modal } from '../../src/ui/components/Modal';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({}) as ComponentStory<typeof Modal>;

Primary.args = {
  open: true,
  position: 'center',
  topPosition: 'center',
  setOpen: () => {},
  children: <div style={{ width: '5rem', height: '5rem' }}>test</div>,
};
