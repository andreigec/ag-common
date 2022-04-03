import { ConfirmModal } from './Modal';
import { error } from '../../../common/helpers/log';
import ReactDOM from 'react-dom';
import React from 'react';

export interface IConfirmAction {
  topText?: string;
  bottomText: string;
}

export const confirm = async ({
  bottomText,
  topText,
}: IConfirmAction): Promise<boolean> => {
  return new Promise((res) => {
    const idName = 'ag-confirm-dialog';
    if (document.body.querySelectorAll('#' + idName).length !== 0) {
      error('confirmDialog already open');
      res(false);
      return;
    }

    const wrapper = document.body.appendChild(document.createElement('div'));
    wrapper.id = idName;
    const onSubmit = (v: boolean) => {
      try {
        res(v);
      } finally {
        ReactDOM.unmountComponentAtNode(wrapper);
      }
    };

    ReactDOM.render(
      <ConfirmModal
        bottomText={bottomText}
        topText={topText}
        onSubmit={onSubmit}
      />,
      wrapper,
    );
  });
};
