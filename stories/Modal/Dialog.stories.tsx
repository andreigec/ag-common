// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { ModalDialog } from '../../src/ui/components/Modal';

const ActionWrapper = () => (
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
      const res = await ModalDialog(
        <div
          style={{
            width: '5rem',
            height: '5rem',
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          test
        </div>,
      );

      // eslint-disable-next-line no-alert
      window.alert('result=' + JSON.stringify(res, null, 2));
    }}
  >
    click to open
  </div>
);

const base: Meta<typeof ActionWrapper> = {
  title: 'UI/Modal',
  component: ActionWrapper,
};

const TemplateModal: StoryFn<typeof ActionWrapper> = () => <ActionWrapper />;

export const Dialog: StoryFn<typeof ActionWrapper> = TemplateModal.bind({});
Dialog.args = {};
export default base;
