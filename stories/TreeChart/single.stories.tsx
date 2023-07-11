import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { TreeChart } from '../../src/ui/components/TreeChart';
import { treeData, treeData1 } from './data';

export default {
  title: 'UI/TreeChart',
  component: TreeChart,
} as Meta<typeof TreeChart>;

const Template: StoryFn<typeof TreeChart> = (args) => (
  <div style={{ backgroundColor: 'white', padding: '0.5rem' }}>
    <TreeChart data={treeData} />
    <TreeChart data={treeData1} />
  </div>
);

export const Single = Template.bind({}) as StoryFn<typeof TreeChart>;

Single.args = {
  data: treeData,
};
