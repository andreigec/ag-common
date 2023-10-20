// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { SearchInline } from '../../src/ui/components/Search/Inline';
import { searchLongList } from './common';

const base: Meta<typeof SearchInline> = {
  title: 'UI/Search',
  component: SearchInline,
};

const Template: StoryFn<typeof SearchInline> = (args) => (
  <SearchInline {...args} />
);

export const Inline: StoryFn<typeof SearchInline> = Template.bind({});

Inline.args = {
  displayItems: searchLongList,
  renderItem: (st) => <div>{(st.item as string).toString()}</div>,
  willDisplayItem: (st, i) => !st || st === i,
  getKeyF: (i) => i as string,
  // eslint-disable-next-line no-alert
  onSelectItem: (a) => alert('click=' + a?.foundItem),
};
export default base;
