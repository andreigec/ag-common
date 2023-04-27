// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { ConfirmDialog, IConfirmDialog } from '../../src/ui/components/Confirm';

const ActionWrapper = (args: IConfirmDialog) => (
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
    onKeyDown={() => {
      //
    }}
    onClick={async () => {
      const res = await ConfirmDialog(args);
      // eslint-disable-next-line no-alert
      window.alert('result=' + JSON.stringify(res, null, 2));
    }}
  >
    click to open
  </div>
);

export default {
  title: 'UI/Confirm',
  component: ActionWrapper,
} as Meta<typeof ActionWrapper>;

const TemplateModal: StoryFn<typeof ActionWrapper> = (args) => (
  <ActionWrapper {...args} />
);

export const Dialog = TemplateModal.bind({}) as StoryFn<typeof ActionWrapper>;

Dialog.args = {
  bottomText: 'bottom',
  topText: 'top',
};
