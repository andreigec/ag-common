export const domContains = (e: DOMRect | undefined, x: number, y: number) => {
  if (!e) {
    return false;
  }

  return e.x <= x && x <= e.x + e.width && e.y <= y && y <= e.y + e.height;
};
