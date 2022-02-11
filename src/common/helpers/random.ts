export function shuffle(array: unknown[], seed: number) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;
  seed = seed || 1;
  const random = function () {
    const x = Math.sin((seed += 1)) * 10000;

    return x - Math.floor(x);
  };

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
