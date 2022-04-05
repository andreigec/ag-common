import {
  PromptDialog,
  IPromptAction,
} from '../../src/ui/components/Prompt/Dialog';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

const ActionWrapper = (args: IPromptAction) => (
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
      const res = await PromptDialog(args);
      // eslint-disable-next-line no-alert
      window.alert('result=' + JSON.stringify(res, null, 2));
    }}
  >
    click to open
  </div>
);

export default {
  title: 'UI/Prompt',
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
