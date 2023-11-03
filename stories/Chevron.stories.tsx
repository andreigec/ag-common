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

Up.args = {
  point: 'up',
} satisfies IChevron;

export const Left: StoryFn<typeof Chevron> = Template.bind({});

Left.args = {
  point: 'left',
} satisfies IChevron;

export const Right: StoryFn<typeof Chevron> = Template.bind({});

Right.args = {
  point: 'right',
} satisfies IChevron;

export const Down: StoryFn<typeof Chevron> = Template.bind({});

Down.args = {
  point: 'down',
} satisfies IChevron;

export default base;

export const DefaultWithArgs = () => <Left {...(Left.args as IChevron)} />;
