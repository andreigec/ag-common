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
    if (enabled) {
      element.setAttribute(key, value);
    } else {
      element.removeAttribute(key);
    }
    return () => element.removeAttribute(key);
  }, [element, enabled, key, value]);
}
