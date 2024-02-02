// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Icon } from '../src/ui/components';
import * as Icons from '../src/ui/icons';

const base: Meta = {
  title: 'UI/Icons',
};

const Template: StoryFn = () => (
  <div>
    {Object.entries(Icons).map(([name, value]) => (
      <div
        style={{
          display: 'flex',
          flexFlow: 'row',
          alignItems: 'center',
          backgroundColor: '#ccc',
        }}
        key={name}
      >
        {name}-
        <Icon style={{ width: '2rem', height: '2rem', fill: 'red' }}>
          <>
            {typeof value === 'object'
              ? value
              : value({ style: { fill: 'green' } })}
          </>
        </Icon>
      </div>
    ))}
  </div>
);

export const Primary: StoryFn = Template.bind({});

Primary.args = {};
export default base;
