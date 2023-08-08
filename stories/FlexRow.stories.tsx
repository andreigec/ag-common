// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { FlexRow } from '../src/ui/components/FlexRow';

const base: Meta<typeof FlexRow> = {
  title: 'UI/FlexRow',
  component: FlexRow,
};

const Template: StoryFn<typeof FlexRow> = (args) => <FlexRow {...args} />;

export const Primary: StoryFn<typeof FlexRow> = Template.bind({});

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
