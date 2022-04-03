import { confirm, IConfirmAction } from '../../ui/components/Confirm/xdialog';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

const ActionWrapper = (
  args: IConfirmAction & {
    onClick: (b: boolean) => void;
  },
) => (
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
      const res = await confirm(args);
      args.onClick(res);
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
Dialog.args = {
  bottomText: 'bottom',
  topText: 'top',
};
