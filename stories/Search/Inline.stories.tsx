// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { SearchInline } from '../../src/ui/components/Search/Inline';
import { searchLongList } from './common';

export default {
  title: 'UI/Search',
  component: SearchInline,
} as Meta<typeof SearchInline>;

const Template: StoryFn<typeof SearchInline> = (args) => (
  <SearchInline {...args} />
);

export const Inline = Template.bind({}) as StoryFn<typeof SearchInline>;

Inline.args = {
  displayItems: searchLongList,
  renderItem: (st) => st.index.toString(),
  willDisplayItem: (st, i) => !st || i === st,
  getKeyF: (i) => i as string,
};
