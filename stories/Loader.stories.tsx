// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { ILoader } from '../src/ui/components/Loader';
import { Loader } from '../src/ui/components/Loader';

const base: Meta<typeof Loader> = {
  title: 'UI/Loader',
  component: Loader,
};

const Template: StoryFn<typeof Loader> = (args) => (
  <div style={{ backgroundColor: '#ccc', position: 'relative' }}>
    test content
    <Loader {...args} />
    test content
  </div>
);

export const Primary: StoryFn<typeof Loader> = Template.bind({});

Primary.args = {
  name: 'test loader',
  position: 'br',
} satisfies ILoader;
export default base;

export const DefaultWithArgs = () => <Primary {...(Primary.args as ILoader)} />;
