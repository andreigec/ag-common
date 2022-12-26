/** surround a substring of text with a value */
export const surround = <T>({
  text,
  start,
  end,
  surround,
}: {
  text: string;
  start: number;
  end: number;
  /** contains will be true when between start + end */
  surround: (s: string, contains: boolean) => T;
}) => [
  surround(text.slice(0, start), false),
  surround(text.slice(start, end), true),
  surround(text.slice(end), false),
];
