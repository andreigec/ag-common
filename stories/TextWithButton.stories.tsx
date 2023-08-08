// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';

import { TextWithButton } from '../src/ui/components/TextWithButton';

const base: Meta<typeof TextWithButton> = {
  title: 'UI/TextWithButton',
  component: TextWithButton,
};

const Template: StoryFn<typeof TextWithButton> = (args) => TextWithButton(args);

export const Primary: StoryFn<typeof TextWithButton> = Template.bind({});

Primary.args = {
  // eslint-disable-next-line no-console
  onSubmit: (c) => console.log('c=' + c),
  placeholder: 'placeholder',
  submitText: 'submit text',
  validateF: (v) => v.length > 3,
};
export default base;
