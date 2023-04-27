// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { SearchDialog } from '../../src/ui/components/Search/Dialog';
import { ISearchDialog } from '../../src/ui/components/Search/types';
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

export default {
  title: 'UI/Search',
  component: ActionWrapper,
} as ComponentMeta<typeof ActionWrapper>;

const TemplateModal: ComponentStory<typeof ActionWrapper> = (args) => (
  <ActionWrapper {...args} />
);

export const Dialog = TemplateModal.bind({}) as ComponentStory<
  typeof ActionWrapper
>;

Dialog.args = {
  displayItems: searchLongList,
  renderItem: (st) => st.index.toString(),
  willDisplayItem: (st, i) => !st || i === st,
  getKeyF: (i) => i as string,
};
