// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { OpenApiCodeBlock } from '../../src/ui/components/OpenApiCodeBlock/OpenApiCodeBlock';
import {
  IOpenApi,
  IOpenApiCodeBlock,
} from '../../src/ui/components/OpenApiCodeBlock/types';

export default {
  title: 'UI/OpenApiCodeBlock',
  component: OpenApiCodeBlock,
} as ComponentMeta<typeof OpenApiCodeBlock>;

const schema: IOpenApi = {
  servers: [{ url: 'https://test.com' }],

  components: {
    securitySchemes: { TestSec: { in: 'header', name: 'authorization' } },
  },
  paths: {
    '/testpath': {
      post: {
        description: 'test path',
        operationId: 'testop',
        security: [{ TestSec: 'TestSec' }],
      },
    },
  },
};

const Template: ComponentStory<typeof OpenApiCodeBlock> = (args) => (
  <div style={{ backgroundColor: 'white', padding: '1rem', whiteSpace: 'pre' }}>
    <OpenApiCodeBlock {...args} />
    ...
    <div>schema:{JSON.stringify(schema, null, 2)}</div>
  </div>
);
export const Primary = Template.bind({});
const args: IOpenApiCodeBlock<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  testop: ({ testparam1: string }) => Promise<any>;
}> = {
  schema,
  funcF: (f) => f.testop({ testparam1: '2' }),
  apiKey: 'test api key',
};

Primary.args = args;
