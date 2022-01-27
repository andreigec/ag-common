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
