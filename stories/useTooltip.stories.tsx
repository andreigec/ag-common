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
  const UT = useTooltip<ITest & { key: string }>();
  return (
    <div data-key="parent">
      <UT.Comp pos={UT.pos}>
        {(data) => <div>content: {data.test}</div>}
      </UT.Comp>
      parent
      <div
        style={{ width: '10rem;', height: '10rem;', border: 'solid 1px black' }}
        onMouseLeave={() => UT.setPos(undefined)}
        onMouseMove={(element) => {
          const key =
            document
              .elementFromPoint(element.pageX, element.pageY)
              ?.getAttribute('data-key') ?? '';
          UT.setPos({
            element,
            parent: element.currentTarget.closest("[data-key='parent']"),
            data: { test: 'test', key },
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
