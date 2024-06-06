'use client';
import { useEffect } from 'react';

/**
 * add and remove an attribute on an element
 * @param param0
 */
export function useElementAttribute({
  enabled,
  key,
  value,
  element,
}: {
  element?: Element;
  enabled: boolean;
  key: string;
  value: string;
}) {
  useEffect(() => {
    if (!element) {
      return;
    }
    try {
      if (enabled) {
        element.setAttribute(key, value);
      } else {
        element.removeAttribute(key);
      }
    } catch (e) {
      //
    }
    return () => {
      try {
        element.removeAttribute(key);
      } catch (e) {
        //
      }
    };
  }, [element, enabled, key, value]);
}
