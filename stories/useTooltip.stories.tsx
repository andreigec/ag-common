// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { useTooltip } from '../src/ui/helpers/useTooltip';

const base: Meta = {
  title: 'UI/useTooltip',
};

interface ITest {
  test: string;
}
const Template: StoryFn = () => {
  const UT = useTooltip<ITest>();
  return (
    <div
      data-type="parent"
      style={{
        border: 'solid 1px black',
        position: 'relative',
        display: 'flex',
        width: '80%',
        margin: 'auto',
        marginTop: '5rem',
      }}
    >
      <UT.Comp pos={UT.pos}>
        {(data) => (
          <div
            style={{ width: '100px', height: '100px', backgroundColor: '#333' }}
          >
            content: {data.test}
          </div>
        )}
      </UT.Comp>
      parent
      <div
        style={{
          width: '10rem',
          height: '10rem',
          border: 'solid 1px black',
          position: 'relative',
        }}
        onMouseLeave={() => UT.setPos(undefined)}
        onMouseMove={(element) => {
          UT.setPos({
            element,
            parent: element.currentTarget.closest("[data-type='parent']"),
            data: { test: 'test1' },
          });
        }}
      >
        child
      </div>
      <div
        style={{
          width: '10rem',
          height: '10rem',
          border: 'solid 1px black',
          position: 'relative',
          marginLeft: 'auto',
        }}
        onMouseLeave={() => UT.setPos(undefined)}
        onMouseMove={(element) => {
          UT.setPos({
            element,
            parent: element.currentTarget.closest("[data-type='parent']"),
            data: { test: 'test2' },
          });
        }}
      >
        child
      </div>
    </div>
  );
};

export const Primary: StoryFn = Template.bind({});

Primary.args = {};
export default base;
