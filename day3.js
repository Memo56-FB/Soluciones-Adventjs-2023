//! Complejidad cognitiva: 4
function findNaughtyStep(original, modified) {
  const [shorter, longer] = original.length > modified.length
      ? [modified, original]
      : [original, modified];
  return longer.split('').find((letter, index) => letter !== shorter[index])
      || ''
}
const original = 'abcd'
const modified = 'abcdd'
console.log(findNaughtyStep(original, modified)) 