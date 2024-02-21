// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { IMarkdown } from '../src/ui/components/Markdown';
import { Markdown } from '../src/ui/components/Markdown';

const app: Meta<typeof Markdown> = {
  title: 'UI/Markdown',
  component: Markdown,
};

const Template: StoryFn<typeof Markdown> = (args) => (
  <div style={{}}>
    <Markdown {...args} />
  </div>
);
export const Primary: StoryFn<typeof Markdown> = Template.bind({});

Primary.args = {
  markdown: `\
# h1
## h2
### h3

** bold ** not bold ** bold **

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

1. 1
2. 2
3. 3

* a
* b
* c

- a
- b
- c

normal text

`,
} satisfies IMarkdown;
export default app;
