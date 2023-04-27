// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { SearchModal } from '../../src/ui/components/Search/Modal';
import { searchLongList } from './common';

export default {
  title: 'UI/Search',
  component: SearchModal,
} as Meta<typeof SearchModal>;

const Template: StoryFn<typeof SearchModal> = (args) => (
  <SearchModal {...args} />
);

export const Modal = Template.bind({}) as StoryFn<typeof SearchModal>;

Modal.args = {
  displayItems: searchLongList,
  renderItem: (st) => st.index.toString(),
  willDisplayItem: (st, i) => !st || i === st,
  getKeyF: (i) => i as string,
};
