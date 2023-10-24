// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { ISearchBox } from '../../src/ui/components/Search';
import { SearchBox } from '../../src/ui/components/Search';

const base: Meta<typeof SearchBox> = {
  title: 'UI/Search',
  component: SearchBox,
};

const Template: StoryFn<typeof SearchBox> = (args) => <SearchBox {...args} />;

export const SearchBoxB: StoryFn<typeof SearchBox> = Template.bind({});

const args: ISearchBox = {
  searchText: 'test',
  // eslint-disable-next-line no-alert
  setSearchText: (st, enter) => alert(`st=${st} enter=${enter}`),
  defaultValue: 'dv1',
};

SearchBoxB.args = args;
export default base;
