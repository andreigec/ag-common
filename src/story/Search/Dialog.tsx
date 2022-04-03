import { searchDialog } from '../../ui/components/Search/searchDialog';
import {
  ISearchDialog,
  TSearchModalRes,
} from '../../ui/components/Search/types';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

const ActionWrapper = <T,>(
  args: ISearchDialog<T> & {
    onClick: (f: TSearchModalRes<T>) => void;
  },
) => (
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
      const res = await searchDialog(args);
      console.log('Res=', res, args);
      args.onClick(res);
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
  <ActionWrapper {...args} onClick={(e) => e} />
);

export const Dialog = TemplateModal.bind({});
Dialog.args = {
  displayItems: [1, 2, 3],
  renderItem: (st, i) => (i as any).toString(),
  willDisplayItem: (st, i) => !st || (i as any).toString() === st,
  getKeyF: (i) => (i as any).toString(),
};
