/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React, { createRef } from 'react';

import { SearchInline } from '../../src/ui/components/Search/Inline';
import type { ISearchDialog } from '../../src/ui/components/Search/types';
import type { IRefTextEdit } from '../../src/ui/components/TextEdit/types';
import { searchLongList } from './common';

const base: Meta<typeof SearchInline> = {
  title: 'UI/Search',
  component: SearchInline,
};

const Template: StoryFn<ISearchDialog<string>> = (args) => {
  const ref = createRef<IRefTextEdit>();

  return (
    <>
      <div
        onClick={() => {
          ref.current?.setValue('2');
        }}
        style={{ cursor: 'pointer', border: 'solid 1px #333', height: '1rem' }}
      >
        change text to &apos;2&apos;
      </div>
      <div
        style={{
          backgroundColor: '#333',
          color: 'white',
          height: 'calc(100% - 1rem)',
        }}
      >
        <SearchInline {...args} textBoxRef={ref} />
      </div>
    </>
  );
};

export const Inline: StoryFn<ISearchDialog<string>> = Template.bind({});

Inline.args = {
  displayItems: searchLongList,
  renderItem: (st) => (
    <div key={st.item as string}>{(st.item as string).toString()}</div>
  ),
  willDisplayItem: (st, i) => !st || i.includes(st),
  getKeyF: (i) => i as string,
  // eslint-disable-next-line no-alert
  onSelectItem: (a) => alert('click=' + a?.foundItem),
  defaultValue: '',
  rowCountOpt: { display: 'top' },
} satisfies ISearchDialog<string>;
export default base;

export const DefaultWithArgs = () => (
  <Inline {...(Inline.args as ISearchDialog<string>)} />
);
