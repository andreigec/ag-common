// eslint-disable-next-line import/no-extraneous-dependencies
import styled from '@emotion/styled';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import type { JSX } from 'react';
import { DefaultWithArgs as Accordion } from './Accordion.stories';
import { DefaultWithArgs as BorderGradient } from './BorderGradient.stories';
import { DefaultWithArgs as Button } from './Button.stories';
import { DefaultWithArgs as Chevron } from './Chevron.stories';
import { DefaultWithArgs as Close } from './Close.stories';
import { DefaultWithArgs as DarkMode } from './DarkMode.stories';
import { DefaultWithArgs as DropdownList } from './DropdownList/Value.stories';
import { DefaultWithArgs as OpenApiCodeBlock } from './OpenApiCodeBlock/index.stories';
import { DefaultWithArgs as ProgressBar } from './ProgressBar.stories';
import { DefaultWithArgs as Search } from './Search/Inline.stories';
import { DefaultWithArgs as SparkLine } from './SparkLine.stories';
import { DefaultWithArgs as Table } from './Table.stories';
import { DefaultWithArgs as TextWithButton } from './TextWithButton.stories';
import { DefaultWithArgs as TreeChart } from './TreeChart/single.stories';

const Base = styled.div`
  height: 3rem;
  border: solid 1px black;
  margin-bottom: 2rem;
  display: relative;
  &[data-big='true'] {
    height: 10rem;
  }
`;

const Components = styled.div`
  display: flex;
  flex-flow: column;
  width: 50%;
`;

const components: /** name, component, isbig */
[string, () => JSX.Element, boolean][] = [
  ['Accordion', Accordion, false],
  ['BorderGradient', BorderGradient, false],
  ['Button', Button, false],
  ['Chevron', Chevron, false],
  ['Close', Close, true],
  ['DropdownList', DropdownList, false],
  ['DarkMode', DarkMode, false],
  ['OpenApiCodeBlock', OpenApiCodeBlock, true],
  ['ProgressBar', ProgressBar, false],
  ['Search', Search, true],
  ['SparkLine', SparkLine, false],
  ['Table', Table, false],
  ['TextWithButton', TextWithButton, false],
  ['TreeChart', TreeChart, true],
];
const Component = () => (
  <Components>
    {components
      .sort((a, b) => (a[0] < b[0] ? -1 : 1))
      .map(([title, C, big]) => (
        <>
          {title}
          <Base key={title} data-big={big}>
            <C />
          </Base>
        </>
      ))}
  </Components>
);
const base: Meta = {
  title: 'UI/All',
  component: Component,
};

const Template: StoryFn = (args) => <Component {...args} />;

export const Primary: StoryFn = Template.bind({});

export default base;
