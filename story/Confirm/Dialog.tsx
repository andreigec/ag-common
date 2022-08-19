import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';
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
    onKeyDown={() => {}}
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
} as ComponentMeta<typeof ActionWrapper>;

const TemplateModal: ComponentStory<typeof ActionWrapper> = (args) => (
  <ActionWrapper {...args} />
);

export const Dialog = TemplateModal.bind({});
const args: IConfirmDialog = {
  bottomText: 'bottom',
  topText: 'top',
};

Dialog.args = args;
