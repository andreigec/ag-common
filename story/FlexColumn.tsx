import { FlexColumn } from '../src/ui/components/FlexColumn';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IFlexColumn } from '../src/ui/components/RowOrColumn';

export default {
  title: 'UI/FlexColumn',
  component: FlexColumn,
} as ComponentMeta<typeof FlexColumn>;

const Template: ComponentStory<typeof FlexColumn> = (args) => (
  <FlexColumn {...args} />
);

export const Primary = Template.bind({});
const args: IFlexColumn = {
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
};

Primary.args = args;
