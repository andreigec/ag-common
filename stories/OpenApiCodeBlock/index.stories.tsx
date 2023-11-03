// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { OpenApiCodeBlock } from '../../src/ui/components/OpenApiCodeBlock/OpenApiCodeBlock';
import type {
  IOpenApi,
  IOpenApiCodeBlock,
} from '../../src/ui/components/OpenApiCodeBlock/types';

type TypedCode = IOpenApiCodeBlock<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  testop: ({ testparam1 }: { testparam1: string }) => Promise<any>;
}>;

const base: Meta<typeof OpenApiCodeBlock> = {
  title: 'UI/OpenApiCodeBlock',
  component: OpenApiCodeBlock,
};

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

const Template: StoryFn<TypedCode> = (args) => <OpenApiCodeBlock {...args} />;
export const Primary: StoryFn<TypedCode> = Template.bind({});

//@ts-ignore
Primary.args = {
  schema,
  funcF: (f) => f.testop({ testparam1: '2' }),
  apiKey: 'test api key',
} satisfies TypedCode;
export default base;

export const DefaultWithArgs = () => (
  <Primary {...(Primary.args as TypedCode)} />
);
