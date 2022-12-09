import { PromptModal } from './Modal';
import React from 'react';
import { createRoot } from 'react-dom/client';
export interface IPromptDialog {
  topText?: string;
  bottomText: string;
  defaultValue?: string;
  placeholder?: string;
}
export const PromptDialog = async (
  p: IPromptDialog,
): Promise<string | undefined> => {
  return new Promise((res) => {
    const wrapper = document.body.appendChild(document.createElement('div'));
    const root = createRoot(wrapper);
    root.render(<PromptModal {...p} res={res} root={root} wrapper={wrapper} />);
  });
};
