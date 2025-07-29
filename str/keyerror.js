function keyboardError(correct, wrong) {
    const correctSet = new Set (correct.split(''));
    const wrongSet = new Set (wrong.split(''));
    const difference = correctSet.difference(wrongSet);
    return [...difference]
}

keyboardError(
  'foobar',
  'fiibnr'
)

keyboardError(
  'hello there',
  'hgllu thgrg'
)

keyboardError(
  'this is awesome!',
  'thjs js kwesome!'
)

keyboardError(
  'nice challenge',
  'nice challenge'
)

keyboardError(
  'you can do this!',
  'yhu cen dh this?'
)