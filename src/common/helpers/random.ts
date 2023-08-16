/** random number up to max. seed defaults to now.getTime() */
export function random(max: number, seed?: number) {
  seed = seed ?? new Date().getTime();
  const ret = (seed * 9301 + 49297) % 233280;
  const rnd = ret / 233280;

  return Math.ceil(rnd * max);
}

/** between 0 and 1. seed defaults to now.getTime() */
export const randomDecimal = function (seed?: number) {
  seed = seed ?? new Date().getTime();
  const x = Math.sin((seed += 1)) * 10000;

  return x - Math.floor(x);
};

export function shuffle<T>(array: T[], seed: number): T[] {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  const r = randomDecimal(seed);
  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(r * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
