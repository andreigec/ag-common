// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { IAutoHideSearchBox } from '../../src/ui/components/Search';
import { AutoHideSearchBox as Component } from '../../src/ui/components/Search';

const base: Meta<typeof Component> = {
  title: 'UI/Search',
  component: Component,
};

const Template: StoryFn<IAutoHideSearchBox> = (args) => <Component {...args} />;

export const AutoHideSearchBox: StoryFn<IAutoHideSearchBox> = Template.bind({});

AutoHideSearchBox.args = {
  searchText: 'needs a value to show',
  // eslint-disable-next-line no-alert
  setSearchText: (st, enter) => alert(`st=${st} enter=${enter}`),
} satisfies IAutoHideSearchBox;
export default base;
