import { DropdownListDialog } from '../../src/ui/components/DropdownList';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

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
    onKeyDown={() => {}}
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
} as ComponentMeta<typeof ActionWrapper>;

const TemplateModal: ComponentStory<typeof ActionWrapper> = () => (
  <ActionWrapper />
);

export const Dialog = TemplateModal.bind({});
Dialog.args = {};
