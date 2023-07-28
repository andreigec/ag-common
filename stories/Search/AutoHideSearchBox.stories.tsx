// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import {
  AutoHideSearchBox as Component,
  IAutoHideSearchBox,
} from '../../src/ui/components/Search';

const base: Meta<typeof Component> = {
  title: 'UI/Search',
  component: Component,
};

const Template: StoryFn<typeof Component> = (args) => <Component {...args} />;

export const AutoHideSearchBox: StoryFn<typeof Component> = Template.bind({});

const args: IAutoHideSearchBox = {
  searchText: '',
  // eslint-disable-next-line no-alert
  setSearchText: (st, enter) => alert(`st=${st} enter=${enter}`),
};
AutoHideSearchBox.args = args;
export default base;
