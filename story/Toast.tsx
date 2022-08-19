import {
  addToast,
  IToastOptions,
  ToastProvider,
} from '../src/ui/components/Toast';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

const ActionWrapper = (args: [string, IToastOptions]) => (
  <div
    style={{
      color: 'white',
      backgroundColor: 'black',
      height: '5rem',
      width: '10rem',
      cursor: 'pointer',
      fontSize: '2rem',
    }}
    role="button"
    tabIndex={-1}
    onKeyDown={() => {}}
    onClick={async () => {
      await addToast(args[0], args[1]);
    }}
  >
    click to open
  </div>
);

export default {
  title: 'UI/Toast',
  component: ActionWrapper,
} as ComponentMeta<typeof ActionWrapper>;

const TemplateModal: ComponentStory<typeof ActionWrapper> = (args) => (
  <div>
    <ToastProvider position="bottom-right" />
    <ActionWrapper {...args} />
  </div>
);

export const Dialog = TemplateModal.bind({});
const args: IToastOptions = { appearance: 'success' };
Dialog.args = ['toast', args];
