// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { ISearchBox, SearchBox } from '../../src/ui/components/Search';

const base: Meta<typeof SearchBox> = {
  title: 'UI/Search',
  component: SearchBox,
};

const Template: StoryFn<typeof SearchBox> = (args) => <SearchBox {...args} />;

export const SearchBoxB: StoryFn<typeof SearchBox> = Template.bind({});

const args: ISearchBox = {
  searchText: '',
  // eslint-disable-next-line no-alert
  setSearchText: (st, enter) => alert(`st=${st} enter=${enter}`),
};
SearchBoxB.args = args;
export default base;
