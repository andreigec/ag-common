// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { IChevron } from '../src/ui/components/Chevron';
import { Chevron } from '../src/ui/components/Chevron';

const base: Meta<typeof Chevron> = {
  title: 'UI/Chevron',
  component: Chevron,
};

const Template: StoryFn<typeof Chevron> = (args) => <Chevron {...args} />;

export const Up: StoryFn<typeof Chevron> = Template.bind({});
const upArgs: IChevron = {
  point: 'up',
};

Up.args = upArgs;

export const Left: StoryFn<typeof Chevron> = Template.bind({});
const leftArgs: IChevron = {
  point: 'left',
};

Left.args = leftArgs;

export const Right: StoryFn<typeof Chevron> = Template.bind({});
const rightArgs: IChevron = {
  point: 'right',
};

Right.args = rightArgs;

export const Down: StoryFn<typeof Chevron> = Template.bind({});
const downArgs: IChevron = {
  point: 'down',
};

Down.args = downArgs;
export default base;
