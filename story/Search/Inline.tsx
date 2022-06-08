import { searchLongList } from './common';
import { SearchInline } from '../../src/ui/components/Search/Inline';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
  title: 'UI/Search',
  component: SearchInline,
} as ComponentMeta<typeof SearchInline>;

const Template: ComponentStory<typeof SearchInline> = (args) => (
  <SearchInline {...args} />
);

export const Inline = Template.bind({});
Inline.args = {
  displayItems: searchLongList,
  renderItem: (st, i) => i as string,
  willDisplayItem: (st, i) => !st || i === st,
  getKeyF: (i) => i as string,
};
