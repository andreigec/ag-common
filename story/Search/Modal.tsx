import { searchLongList } from './common';
import { SearchModal } from '../../src/ui/components/Search/Modal';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/Search',
  component: SearchModal,
} as ComponentMeta<typeof SearchModal>;

const Template: ComponentStory<typeof SearchModal> = (args) => (
  <SearchModal {...args} />
);

export const Modal = Template.bind({});
Modal.args = {
  displayItems: searchLongList,
  renderItem: (st, i) => i as string,
  willDisplayItem: (st, i) => !st || i === st,
  getKeyF: (i) => i as string,
};
