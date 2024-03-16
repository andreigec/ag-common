// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryFn } from '@storybook/react';
import React, { useContext } from 'react';

import { Icon } from '../src/ui/components/Icon';
import { ToastContext, ToastProvider } from '../src/ui/components/Toast';
import { Hamburger } from '../src/ui/icons/Hamburger';

const ActionWrapper = () => {
  const x = useContext(ToastContext);
  return (
    <>
      <div
        style={{
          color: 'white',
          backgroundColor: 'black',
          height: '5rem',
          cursor: 'pointer',
          fontSize: '2rem',
        }}
        role="button"
        tabIndex={-1}
        onKeyDown={() => {
          //
        }}
        onClick={async () => {
          await x.addToast('hey guys, long toasttt hereeeee', {
            appearance: 'success',
            autoClose: null,
          });
        }}
      >
        click to open standard
      </div>

      <div
        style={{
          color: 'white',
          backgroundColor: 'black',
          height: '5rem',
          cursor: 'pointer',
          fontSize: '2rem',
          marginTop: '5rem',
        }}
        role="button"
        tabIndex={-1}
        onKeyDown={() => {
          //
        }}
        onClick={async () => {
          await x.addToastDetailed(
            {
              title: 'title',
              content: <div>hg content here</div>,
              icon: (
                <Icon style={{ fill: 'white', width: '2rem' }}>
                  <Hamburger />
                </Icon>
              ),
            },
            {
              appearance: 'success',
              autoClose: null,
            },
          );
        }}
      >
        click to open detailed
      </div>
    </>
  );
};

const base: Meta<typeof ActionWrapper> = {
  title: 'UI/Toast',
  component: ActionWrapper,
};

const TemplateModal: StoryFn<typeof ActionWrapper> = () => (
  <div>
    <ToastProvider
      providerOptions={{
        style: {
          borderColor: 'blue',
          backgroundColor: 'black',
          color: 'white',
        },
      }}
    >
      <ActionWrapper />
    </ToastProvider>
  </div>
);

export const Dialog: StoryFn<typeof ActionWrapper> = TemplateModal.bind({});

export default base;
