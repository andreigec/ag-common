// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { FlexRow } from '../src/ui/components/FlexRow';

export default {
  title: 'UI/FlexRow',
  component: FlexRow,
} as Meta<typeof FlexRow>;

const Template: StoryFn<typeof FlexRow> = (args) => <FlexRow {...args} />;

export const Primary = Template.bind({}) as StoryFn<typeof FlexRow>;

Primary.args = {
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};
