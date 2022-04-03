import { SearchDialog } from '../../ui/components/Search/Dialog';
import { ISearchDialog } from '../../ui/components/Search/types';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

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
    onKeyDown={() => {}}
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

export const Dialog = TemplateModal.bind({});
Dialog.args = {
  displayItems: ['1', '2', '3'],
  renderItem: (st, i) => i as string,
  willDisplayItem: (st, i) => !st || i === st,
  getKeyF: (i) => i as string,
};
