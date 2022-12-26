import { containsInsensitiveIndex } from './contains';

export interface IGetExtendedStringSegment {
  /** based on original full text */
  outerStart: number;
  /** based on original full text */
  outerEnd: number;
  /** words including the gaps (probably what you want) */
  outerText: string;
  /** the start index of the searched term in outerText */
  innerStart: number;
  /** the end index of the searched term in outerText */
  innerEnd: number;
}
/**
 * will return a piece of text around a found term, and the index it was found
 * @param hay
 * @param needle
 * @returns
 */
export const getExtendedStringSegment = (
  hay: string,
  needle: string,
  blocksOnEitherSide = 5,
  /** can override this if space bounded words are required */
  gapChars = ['\n', '\r\n'],
): undefined | IGetExtendedStringSegment => {
  const fi = containsInsensitiveIndex({ str: hay }, needle);
  if (fi === -1) {
    return undefined;
  }

  let start = fi;
  //we want to extend the partial content back to -(gap) gapChars
  for (let a = 0; a <= blocksOnEitherSide; a += 1) {
    const newstartI = containsInsensitiveIndex(
      { str: hay.substring(0, start), fromLast: true },
      ...gapChars,
    );

    if (newstartI !== -1) {
      start = newstartI;
    }
  }

  //and forward
  let end = fi + needle.length;
  for (let a = 0; a <= blocksOnEitherSide; a += 1) {
    const newEndI = containsInsensitiveIndex(
      { str: hay.substring(end) },
      ...gapChars,
    );

    if (newEndI !== -1) {
      end += newEndI + 1;
    }
  }
  const outerText = hay.substring(start, end);
  const innerStart = outerText.toLowerCase().indexOf(needle.toLowerCase());

  return {
    outerStart: start,
    outerEnd: end,
    outerText,
    innerStart,
    innerEnd: innerStart + needle.length,
  };
};
