// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { ISearchModal } from '../../src';
import { SearchModal } from '../../src/ui/components/Search/Modal';
import { searchLongList } from './common';

const base: Meta<typeof SearchModal> = {
  title: 'UI/Search',
  component: SearchModal,
};

const Template: StoryFn<ISearchModal<string>> = (args) => (
  <SearchModal {...args} />
);

export const Modal: StoryFn<ISearchModal<string>> = Template.bind({});

Modal.args = {
  displayItems: searchLongList,
  renderItem: (st) => (
    <div key={st.item as string}>{(st.item as string).toString()}</div>
  ),
  willDisplayItem: (st, i) => !st || i.includes(st),
  getKeyF: (i) => i as string,
  // eslint-disable-next-line no-alert
  onSelectItem: (a) => alert('click=' + a?.foundItem),
} satisfies ISearchModal<string>;
export default base;
