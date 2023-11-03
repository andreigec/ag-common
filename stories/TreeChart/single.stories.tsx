import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { TreeNodeData } from '../../src/ui/components/TreeChart';
import { TreeChart } from '../../src/ui/components/TreeChart';
import { treeData, treeData1 } from './data';

const base: Meta<typeof TreeChart> = {
  title: 'UI/TreeChart',
  component: TreeChart,
};

const Template: StoryFn<typeof TreeChart> = () => (
  <div
    style={{
      backgroundColor: 'white',
      height: '100%',
      overflow: 'hidden',
    }}
  >
    <TreeChart data={treeData} />
    <TreeChart data={treeData1} />
  </div>
);

export const Single: StoryFn<typeof TreeChart> = Template.bind({});

Single.args = {
  data: treeData,
} satisfies TreeNodeData;
export default base;

export const DefaultWithArgs = () => (
  <Single {...(Single.args as TreeNodeData)} />
);
