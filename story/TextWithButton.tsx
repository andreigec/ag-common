// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextWithButton } from '../src/ui/components/TextWithButton';

export default {
  title: 'UI/TextWithButton',
  component: TextWithButton,
} as ComponentMeta<typeof TextWithButton>;

const Template: ComponentStory<typeof TextWithButton> = (args) =>
  TextWithButton(args);

export const Primary = Template.bind({}) as ComponentStory<
  typeof TextWithButton
>;

Primary.args = {
  // eslint-disable-next-line no-console
  onSubmit: (c) => console.log('c=' + c),
  placeholder: 'placeholder',
  submitText: 'submit text',
  validateF: (v) => v.length > 3,
};
