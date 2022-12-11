// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Loader } from '../src/ui/components/Loader';

export default {
  title: 'UI/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Primary = Template.bind({}) as ComponentStory<typeof Loader>;

Primary.args = {
  name: 'test loader',
};
