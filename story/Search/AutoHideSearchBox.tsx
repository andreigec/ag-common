// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import {
  AutoHideSearchBox as Component,
  IAutoHideSearchBox,
} from '../../src/ui/components/Search';

export default {
  title: 'UI/Search',
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const AutoHideSearchBox = Template.bind({}) as ComponentStory<
  typeof Component
>;

const args: IAutoHideSearchBox = {
  searchText: '',
  // eslint-disable-next-line no-alert
  setSearchText: (st, enter) => alert(`st=${st} enter=${enter}`),
};
AutoHideSearchBox.args = args;
