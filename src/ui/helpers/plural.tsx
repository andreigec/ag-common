export function plural(word: string, count: number) {
  if (!word || !count) {
    return word;
  }

  if (count > 1 && !['s', 'g'].find((w) => word.endsWith(w))) {
    return `${word}s`;
  }

  return word;
}
