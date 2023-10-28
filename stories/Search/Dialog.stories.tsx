// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { SearchDialog } from '../../src/ui/components/Search/Dialog';
import type { ISearchDialog } from '../../src/ui/components/Search/types';
import { searchLongList } from './common';

const ActionWrapper = <T,>(args: ISearchDialog<T>) => (
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
      const res = await SearchDialog(args);
      // eslint-disable-next-line no-alert
      window.alert('result=' + JSON.stringify(res, null, 2));
    }}
  >
    click to open
  </div>
);

const base: Meta<typeof ActionWrapper> = {
  title: 'UI/Search',
  component: ActionWrapper,
};

const TemplateModal: StoryFn<typeof ActionWrapper> = (args) => (
  <ActionWrapper {...args} />
);

export const Dialog: StoryFn<typeof ActionWrapper> = TemplateModal.bind({});

Dialog.args = {
  displayItems: searchLongList,
  renderItem: (st) => (
    <div key={st.item as string}>{(st.item as string).toString()}</div>
  ),
  willDisplayItem: (st, i) => !st || i === st,
  getKeyF: (i) => i as string,
};
export default base;
