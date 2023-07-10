import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { TreeChart, TreeNodeData } from '../../src/ui/components/TreeChart';

const data = [
  {
    path: 'andreigec/introspect.cloud/VERCEL/Production/deploy/success',
    size: 1,
  },
  { path: 'andreigec/introspect.cloud/GH/infra/push', size: 1 },
  {
    path: 'andreigec/priority.quest/VERCEL/Production/deploy/success',
    size: 1,
  },
  { path: 'andreigec/priority.quest/GH/build/push', size: 1 },
  { path: 'andreigecanalytica/surveyfoundry.com/GH/infra/push', size: 1 },
  {
    path: 'andreigecanalytica/surveyfoundry.com/VERCEL/Production/deploy/success',
    size: 1,
  },
  { path: 'andreigec/mynotes.cloud/VERCEL/Production/deploy/success', size: 1 },
  { path: 'andreigec/mynotes.cloud/GH/infra/push', size: 1 },
  { path: 'andreigecanalytica/webscrape.app/GH/infra/push', size: 1 },
  {
    path: 'andreigecanalytica/webscrape.app/VERCEL/Production/deploy/success',
    size: 1,
  },
  { path: 'andreigecanalytica/drawapp.dev/GH/infra/push', size: 1 },
  {
    path: 'andreigecanalytica/drawapp.dev/VERCEL/Production/deploy/success',
    size: 1,
  },
  { path: 'andreigec/urls.nz/VERCEL/Production/deploy/success', size: 1 },
  { path: 'andreigec/urls.nz/GH/infra/push', size: 1 },
  {
    path: 'andreigecanalytica/analytica.click/VERCEL/Production/deploy/success',
    size: 2,
  },
  { path: 'andreigecanalytica/analytica.click/GH/infra/push', size: 2 },
  { path: 'andreigecanalytica/analytica.click/GH/npm/push', size: 2 },
  {
    path: 'andreigecanalytica/analytica.click.gh/GH/test/workflow_dispatch',
    size: 1,
  },
  { path: 'andreigec/introspect.cloud/GH/infra/push', size: 1 },
  {
    path: 'andreigec/introspect.cloud/VERCEL/Production/deploy/success',
    size: 2,
  },
  { path: 'andreigec/introspect.cloud/GH/infra/push', size: 2 },
  { path: 'andreigec/techmer.ch/VERCEL/Production/deploy/success', size: 2 },
  { path: 'andreigec/techmer.ch/GH/infra/push', size: 2 },
  {
    path: 'andreigec/bollardart.com.au/VERCEL/Production/deploy/success',
    size: 2,
  },
  {
    path: 'andreigec/leancoffee.cloud/VERCEL/Production/deploy/success',
    size: 2,
  },
  { path: 'andreigec/leancoffee.cloud/GH/infra/push', size: 1 },
  {
    path: 'andreigec/updatepackagejson/VERCEL/Production/deploy/success',
    size: 2,
  },
  { path: 'andreigec/gec.dev/GH/infra/pull_request', size: 1 },
  { path: 'andreigec/gec.dev/GH/infra/pull_request', size: 2 },
  { path: 'andreigec/gec.dev/GH/infra/pull_request', size: 3 },
  { path: 'andreigec/gec.dev/VERCEL/Production/deploy/success', size: 2 },
  { path: 'andreigec/priority.quest/GH/build/push', size: 1 },
  {
    path: 'andreigec/priority.quest/VERCEL/Production/deploy/success',
    size: 2,
  },
  { path: 'andreigec/priority.quest/GH/build/push', size: 2 },
  {
    path: 'andreigec/buytoilets.com.au/VERCEL/Production/deploy/success',
    size: 2,
  },
  { path: 'andreigecanalytica/surveyfoundry.com/GH/infra/push', size: 1 },
  {
    path: 'andreigecanalytica/surveyfoundry.com/VERCEL/Production/deploy/success',
    size: 3,
  },
  { path: 'andreigecanalytica/surveyfoundry.com/GH/infra/push', size: 2 },
  { path: 'andreigecanalytica/surveyfoundry.com/GH/infra/push', size: 1 },
  {
    path: 'andreigecanalytica/surveyfoundry.com/VERCEL/Production/deploy/success',
    size: 1,
  },
  { path: 'andreigec/mynotes.cloud/GH/infra/push', size: 1 },
  { path: 'andreigec/mynotes.cloud/GH/infra/push', size: 2 },
  { path: 'andreigec/mynotes.cloud/VERCEL/Production/deploy/success', size: 2 },
  {
    path: 'andreigecanalytica/roarcoder.dev/VERCEL/Production/deploy/success',
    size: 2,
  },
  { path: 'andreigecanalytica/roarcoder.dev/GH/infra/push', size: 2 },
  {
    path: 'andreigecanalytica/webscrape.app/VERCEL/Production/deploy/success',
    size: 2,
  },
  { path: 'andreigecanalytica/webscrape.app/GH/infra/push', size: 1 },
  { path: 'andreigecanalytica/webscrape.app/GH/infra/push', size: 1 },
  {
    path: 'andreigecanalytica/webscrape.app/VERCEL/Production/deploy/success',
    size: 1,
  },
  { path: 'andreigecanalytica/drawapp.dev/GH/infra/push', size: 1 },
  {
    path: 'andreigecanalytica/drawapp.dev/VERCEL/Production/deploy/success',
    size: 3,
  },
  { path: 'andreigecanalytica/drawapp.dev/GH/infra/push', size: 3 },
  { path: 'andreigecanalytica/drawapp.dev/GH/infra/push', size: 1 },
  {
    path: 'andreigecanalytica/drawapp.dev/VERCEL/Production/deploy/success',
    size: 1,
  },
  { path: 'andreigec/urls.nz/GH/infra/push', size: 1 },
  { path: 'andreigec/urls.nz/VERCEL/Production/deploy/success', size: 2 },
  { path: 'andreigec/urls.nz/GH/infra/push', size: 2 },
  { path: 'andreigec/ag-infra/GH/infra/pull_request', size: 2 },
  { path: 'andreigec/ag-awsauth/GH/main/push', size: 1 },
  { path: 'andreigec/ag-awsauth/GH/PR/pull_request', size: 1 },
  { path: 'andreigec/github/GH/PR/pull_request', size: 1 },
  { path: 'andreigec/ag-infra/GH/PR/pull_request', size: 1 },
  { path: 'andreigec/ag-infra/GH/PR/pull_request', size: 3 },
  { path: 'andreigec/ag-infra/GH/infra/pull_request', size: 3 },
  { path: 'andreigec/ag-awsauth/GH/PR/pull_request', size: 2 },
  { path: 'andreigec/ag-common/GH/main/push', size: 1 },
  { path: 'andreigec/github/GH/PR/pull_request', size: 1 },
  { path: 'andreigec/ag-awsauth/GH/PR/pull_request', size: 2 },
  { path: 'andreigec/ag-infra/GH/infra/push', size: 1 },
  { path: 'andreigec/ag-infra/GH/infra/pull_request', size: 1 },
  { path: 'andreigec/ag-infra/GH/PR/pull_request', size: 1 },
  { path: 'andreigec/ag-common/GH/main/push', size: 1 },
  { path: 'andreigec/ag-awsauth/GH/main/push', size: 3 },
  { path: 'andreigec/ag-awsauth/GH/PR/pull_request', size: 1 },
  { path: 'andreigec/ag-common/GH/main/push', size: 1 },
  { path: 'andreigec/ag-common/GH/storybook/push', size: 1 },
  { path: 'andreigec/ag-common-next-auth/GH/main/push', size: 1 },
  { path: 'andreigec/ag-awsauth/GH/main/push', size: 1 },
  { path: 'andreigec/ag-awsauth/GH/PR/pull_request', size: 1 },
];

export default {
  title: 'UI/TreeChart',
  component: TreeChart,
} as Meta<typeof TreeChart>;

const Template: StoryFn<typeof TreeChart> = (args) => (
  <div style={{ backgroundColor: 'white', padding: '0.5rem' }}>
    <TreeChart {...args} />
  </div>
);

export const Single = Template.bind({}) as StoryFn<typeof TreeChart>;

Single.args = {
  data,
};
