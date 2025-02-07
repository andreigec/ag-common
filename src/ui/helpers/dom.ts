import { arrayToObject } from '../../common/helpers/array';

export const domContains = (e: DOMRect | undefined, x: number, y: number) => {
  if (!e) {
    return false;
  }

  return e.x <= x && x <= e.x + e.width && e.y <= y && y <= e.y + e.height;
};

export const convertRemToPixels = (rem: number) => {
  let fontSize = '16px';
  if (typeof window !== 'undefined') {
    fontSize = getComputedStyle(document.documentElement).fontSize;
  }
  return rem * parseFloat(fontSize);
};

/**
 * can use to nested wrap styledcomponent components, but persist data- attributes
 * @param p
 * @returns
 */

export const filterDataProps = (p: any): Record<string, string> => {
  const x = Object.entries(p)
    .filter((r) => r[0].startsWith('data-'))
    .map((r) => r as unknown as [string, string]);

  return arrayToObject(
    x,
    (s) => s[0],
    (s) => s[1],
  );
};

export const isRightClick = (event: MouseEvent | TouchEvent) => {
  //
  let isRightMB = false;

  if ('which' in event)
    // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
    isRightMB = event.which == 3;
  else if ('button' in event)
    // IE, Opera

    isRightMB = (event as any).button == 2;

  return isRightMB;
};
