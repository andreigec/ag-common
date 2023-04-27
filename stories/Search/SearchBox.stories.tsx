// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { ISearchBox, SearchBox } from '../../src/ui/components/Search';

export default {
  title: 'UI/Search',
  component: SearchBox,
} as Meta<typeof SearchBox>;

const Template: StoryFn<typeof SearchBox> = (args) => <SearchBox {...args} />;

export const SearchBoxB = Template.bind({}) as StoryFn<typeof SearchBox>;

const args: ISearchBox = {
  searchText: '',
  // eslint-disable-next-line no-alert
  setSearchText: (st, enter) => alert(`st=${st} enter=${enter}`),
};
SearchBoxB.args = args;
