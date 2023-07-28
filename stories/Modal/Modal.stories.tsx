// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Modal } from '../../src/ui/components/Modal';

const base: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
};

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Primary: StoryFn<typeof Modal> = Template.bind({});

Primary.args = {
  open: true,
  position: 'center',
  topPosition: 'center',
  setOpen: () => {
    //
  },
  children: <div style={{ width: '5rem', height: '5rem' }}>test</div>,
};
export default base;
