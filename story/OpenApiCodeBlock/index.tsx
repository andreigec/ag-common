import { OpenApiCodeBlock } from '../../src/ui/components/OpenApiCodeBlock/OpenApiCodeBlock';
import {
  IOpenApi,
  IOpenApiCodeBlock,
} from '../../src/ui/components/OpenApiCodeBlock/types';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
  title: 'UI/OpenApiCodeBlock',
  component: OpenApiCodeBlock,
} as ComponentMeta<typeof OpenApiCodeBlock>;

const Template: ComponentStory<typeof OpenApiCodeBlock> = (args) => (
  <div style={{ backgroundColor: 'white', padding: '1rem' }}>
    <OpenApiCodeBlock {...args} />
  </div>
);

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
export const Primary = Template.bind({});
Primary.args = {
  schema,
  funcF: (f) => f.testop({ testparam1: '2' }),
  apiKey: 'test api key',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as IOpenApiCodeBlock<any>;
