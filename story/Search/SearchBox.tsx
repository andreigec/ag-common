// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ISearchBox, SearchBox } from '../../src/ui/components/Search';

export default {
  title: 'UI/Search',
  component: SearchBox,
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = (args) => (
  <SearchBox {...args} />
);

export const SearchBoxB = Template.bind({}) as ComponentStory<typeof SearchBox>;

const args: ISearchBox = {
  searchText: '',
  setSearchText: (st) => console.log('st=', st),
};
SearchBoxB.args = args;
