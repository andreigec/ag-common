import {
  BorderGradient,
  IBorderGradient,
} from '../src/ui/components/BorderGradient';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/BorderGradient',
  component: BorderGradient,
} as ComponentMeta<typeof BorderGradient>;

const Template: ComponentStory<typeof BorderGradient> = (args) => (
  <BorderGradient {...args} />
);

export const Primary = Template.bind({});
const args: IBorderGradient = {
  disabled: false,
  children: <div>test child</div>,
};

Primary.args = args;
