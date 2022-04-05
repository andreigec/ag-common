import { PromptModal } from './Modal';
import React from 'react';
import ReactDOM from 'react-dom';
export interface IPromptAction {
  topText?: string;
  bottomText: string;
  defaultValue?: string;
  placeholder?: string;
}
export const PromptDialog = async (
  p: IPromptAction,
): Promise<string | undefined> => {
  return new Promise((res) => {
    const wrapper = document.body.appendChild(document.createElement('div'));
    ReactDOM.render(
      <PromptModal {...p} res={res} wrapper={wrapper} />,
      wrapper,
    );
  });
};
