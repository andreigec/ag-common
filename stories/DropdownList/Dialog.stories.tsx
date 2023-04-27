// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { DropdownListDialog } from '../../src/ui/components/DropdownList';

const ActionWrapper = () => (
  <div
    style={{
      color: 'white',
      backgroundColor: 'black',
      height: '5rem',
      width: '10rem',
      cursor: 'pointer',
      fontSize: '2rem',
      marginTop: '20rem',
    }}
    role="button"
    tabIndex={-1}
    onKeyDown={() => {
      //
    }}
    onClick={async (e) => {
      const res = await DropdownListDialog({
        options: [1, 2, 3],
        renderF: (c) => <div>{c}</div>,
        position: { x: e.clientX, y: e.clientY },
      });

      // eslint-disable-next-line no-alert
      window.alert('result=' + JSON.stringify(res, null, 2));
    }}
  >
    click to open
  </div>
);

export default {
  title: 'UI/DropdownList',
  component: ActionWrapper,
} as Meta<typeof ActionWrapper>;

const TemplateModal: StoryFn<typeof ActionWrapper> = () => <ActionWrapper />;

export const Dialog = TemplateModal.bind({});
Dialog.args = {};
