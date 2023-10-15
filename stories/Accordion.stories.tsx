// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Accordion } from '../src/ui/components/Accordion';

const base: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
};

const Template: StoryFn<typeof Accordion> = (args) => (
  <Accordion {...args}>content here</Accordion>
);

export const Primary: StoryFn<typeof Accordion> = Template.bind({});

Primary.args = {
  title: 'test title',
  chevronColour: 'black',
};
export default base;
