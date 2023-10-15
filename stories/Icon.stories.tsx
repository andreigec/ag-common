// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Icon } from '../src/ui/components/Icon';

const TestSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 118">
    <path d="M62,3c0,45,55,78-21,114c-5-40-80-61,21-114" />
    <path d="M17,15c6,35-52,65,24,102c50-37,46-80-24-102" fill="#8ad945" />
  </svg>
);

const base: Meta<typeof Icon> = {
  title: 'UI/Icon',
  component: Icon,
};

const Template: StoryFn<typeof Icon> = (args) => (
  <Icon {...args}>{TestSvg}</Icon>
);

export const Primary: StoryFn<typeof Icon> = Template.bind({});

Primary.args = {
  style: {
    width: '2rem',
    height: '2rem',
    fill: 'red',
  },
};
export default base;
