import { SearchInline } from '../../ui/components/Search/Inline';
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
  displayItems: [1, 2, 3],
  renderItem: (st, i) => (i as any).toString(),
  willDisplayItem: (st, i) => !st || (i as any).toString() === st,
  getKeyF: (i) => (i as any).toString(),
};
