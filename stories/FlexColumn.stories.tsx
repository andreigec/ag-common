// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { FlexColumn } from '../src/ui/components/FlexColumn';

const base: Meta<typeof FlexColumn> = {
  title: 'UI/FlexColumn',
  component: FlexColumn,
};

const Template: StoryFn<typeof FlexColumn> = (args) => <FlexColumn {...args} />;

export const Primary: StoryFn<typeof FlexColumn> = Template.bind({});

Primary.args = {
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};
export default base;
