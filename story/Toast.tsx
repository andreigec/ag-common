// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useContext } from 'react';

import {
  IToast,
  IToastProviderOptions,
  ToastContext,
  ToastProvider,
} from '../src/ui/components/Toast';

interface IToastTest {
  toast: IToast;
  container: IToastProviderOptions;
}
const ActionWrapper = (a: IToastTest) => {
  const x = useContext(ToastContext);
  return (
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
        await x.addToast(a.toast.message, a.toast.options);
      }}
    >
      click to open
    </div>
  );
};

export default {
  title: 'UI/Toast',
  component: ActionWrapper,
} as ComponentMeta<typeof ActionWrapper>;

const TemplateModal: ComponentStory<typeof ActionWrapper> = (args) => (
  <div>
    <ToastProvider providerOptions={args.container}>
      <ActionWrapper {...args} />
    </ToastProvider>
  </div>
);

export const Dialog = TemplateModal.bind({}) as ComponentStory<
  typeof ActionWrapper
>;
Dialog.args = {
  toast: {
    message: 'hey guys, long test hereeeee',
    options: {
      appearance: 'success',
      autoClose: 2000,
    },
  },
  container: { darkMode: false },
};
