import React from 'react';
export interface IRefTextEdit {
  /** Set the internal value of the typed string. Can be used to clear externally */
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
export interface ITextEdit {
  /**
   * forces single row input style. will also enable 'Enter' to auto submit
   */
  singleLine?: boolean;
  className?: string;
  /**
   * default value of field. default empty
   */
  defaultValue?: string;
  /**
   * if truthy will enable text edit mode by default. if focus is true, will also focus on open
   */
  defaultEditing?: { focus?: boolean };
  onSubmit: (
    val: string,
    /**
     * if true, was passed by pressing Enter
     */
    enterPressed: boolean,
  ) => void;
  /**
   * disable edit text functionality
   */
  disableEdit?: boolean;
  placeholder?: string;
  /**
   * when the user edits or unselects edit
   */
  onEditingChange?: (editing: boolean) => void;
  /**
   * if null will disable click outside
   */
  onClickOutsideWithNoValue?: (() => void) | null;
  onClickNotEditing?: () => void;
  /**
   * if true, will not grow. default false
   */
  noGrow?: boolean;
  /**
   * will set these attributes directly on element. can put data-* here
   */
  attributes?: Record<string, string | number | boolean>;
  /**
   * optional content at the left of the box
   */
  leftContent?: JSX.Element;
  /**
   * if true, will add undo button after changes. if false, will submit after every keypress. default true
   */
  allowUndo?: boolean;
  /**
   * will call on user pressed escape
   */
  onEscape?: () => void;
  maxLength?: number;
  /**
   * if provided and return false, will cancel keydown
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => boolean;
}
