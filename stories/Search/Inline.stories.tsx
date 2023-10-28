/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React, { createRef } from 'react';

import type { IRefTextEdit } from '../../src';
import { SearchInline } from '../../src/ui/components/Search/Inline';
import { searchLongList } from './common';

const base: Meta<typeof SearchInline> = {
  title: 'UI/Search',
  component: SearchInline,
};

const Template: StoryFn<typeof SearchInline> = (args) => {
  const ref = createRef<IRefTextEdit>();

  return (
    <div>
      <div
        onClick={() => {
          ref.current?.setValue?.('hg');
        }}
      >
        change text
      </div>
      <SearchInline {...args} textBoxRef={ref} />
    </div>
  );
};

export const Inline: StoryFn<typeof SearchInline> = Template.bind({});

Inline.args = {
  displayItems: searchLongList,
  renderItem: (st) => (
    <div key={st.item as string}>{(st.item as string).toString()}</div>
  ),
  willDisplayItem: (st, i) => !st || st === i,
  getKeyF: (i) => i as string,
  // eslint-disable-next-line no-alert
  onSelectItem: (a) => alert('click=' + a?.foundItem),
  defaultValue: 'dv',
};
export default base;
