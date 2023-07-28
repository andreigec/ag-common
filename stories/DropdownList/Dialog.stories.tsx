/* eslint-disable no-alert */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import {
  DropdownList,
  DropdownListDialog,
} from '../../src/ui/components/DropdownList';

const base: Meta<typeof DropdownList> = {
  title: 'UI/DropdownList',
  component: DropdownList,
};

const Template: StoryFn<typeof DropdownList> = () => (
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

export const Dialog: StoryFn<typeof DropdownList> = Template.bind({});

Dialog.args = {
  options: ['LONG VALUEEEE', '1', '3'],
  value: 'LONG VALUEEEE',
  placeholder: 'test ph',
  children: <>test children</>,
  onChange: (v) => alert('change=' + JSON.stringify(v, null, 2)),
  renderF: (r) => <div>{r as string}</div>,
};
export default base;
