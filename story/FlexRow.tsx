import { FlexRow } from '../src/ui/components/FlexRow';
import { IRowOrColumn } from '../src/ui/components/RowOrColumn';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/FlexRow',
  component: FlexRow,
} as ComponentMeta<typeof FlexRow>;

const Template: ComponentStory<typeof FlexRow> = (args) => (
  <FlexRow {...args}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </FlexRow>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'test title',
  enableOverflow: true,
} as IRowOrColumn;
