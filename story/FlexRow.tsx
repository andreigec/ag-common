// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { FlexRow } from '../src/ui/components/FlexRow';

export default {
  title: 'UI/FlexRow',
  component: FlexRow,
} as ComponentMeta<typeof FlexRow>;

const Template: ComponentStory<typeof FlexRow> = (args) => (
  <FlexRow {...args} />
);

export const Primary = Template.bind({}) as ComponentStory<typeof FlexRow>;

Primary.args = {
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};
