import { FlexColumn } from '../src/ui/components/FlexColumn';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/FlexColumn',
  component: FlexColumn,
} as ComponentMeta<typeof FlexColumn>;

const Template: ComponentStory<typeof FlexColumn> = (args) => (
  <FlexColumn {...args}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </FlexColumn>
);

export const Primary = Template.bind({});
Primary.args = {};
