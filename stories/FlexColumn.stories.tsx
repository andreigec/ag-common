// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { FlexColumn } from '../src/ui/components/FlexColumn';

export default {
  title: 'UI/FlexColumn',
  component: FlexColumn,
} as Meta<typeof FlexColumn>;

const Template: StoryFn<typeof FlexColumn> = (args) => <FlexColumn {...args} />;

export const Primary = Template.bind({}) as StoryFn<typeof FlexColumn>;

Primary.args = {
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};
