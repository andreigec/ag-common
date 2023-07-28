// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { SearchModal } from '../../src/ui/components/Search/Modal';
import { searchLongList } from './common';

const base: Meta<typeof SearchModal> = {
  title: 'UI/Search',
  component: SearchModal,
};

const Template: StoryFn<typeof SearchModal> = (args) => (
  <SearchModal {...args} />
);

export const Modal: StoryFn<typeof SearchModal> = Template.bind({});

Modal.args = {
  displayItems: searchLongList,
  renderItem: (st) => st.index.toString(),
  willDisplayItem: (st, i) => !st || i === st,
  getKeyF: (i) => i as string,
};
export default base;
