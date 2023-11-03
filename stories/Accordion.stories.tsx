// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { IAccordion } from '../src/ui/components/Accordion';
import { Accordion } from '../src/ui/components/Accordion';

const base: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
};

const Template: StoryFn<IAccordion> = (args) => <Accordion {...args} />;

export const Primary: StoryFn<IAccordion> = Template.bind({});

Primary.args = {
  title: 'test title',
  chevronColour: 'black',
  children: 'content here',
} satisfies IAccordion;
export default base;

export const DefaultWithArgs = () => (
  <Primary {...(Primary.args as IAccordion)} />
);
