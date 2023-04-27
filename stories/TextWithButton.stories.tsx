// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';

import { TextWithButton } from '../src/ui/components/TextWithButton';

export default {
  title: 'UI/TextWithButton',
  component: TextWithButton,
} as Meta<typeof TextWithButton>;

const Template: StoryFn<typeof TextWithButton> = (args) => TextWithButton(args);

export const Primary = Template.bind({}) as StoryFn<typeof TextWithButton>;

Primary.args = {
  // eslint-disable-next-line no-console
  onSubmit: (c) => console.log('c=' + c),
  placeholder: 'placeholder',
  submitText: 'submit text',
  validateF: (v) => v.length > 3,
};
