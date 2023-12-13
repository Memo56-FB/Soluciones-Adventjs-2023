function maxDistance(movements) {
  // Code here
  let maxDistance = 0
  const matchGt = (movements.match(/>/g) || []).length
  const matchLt = (movements.match(/</g) || []).length
  const matchAsterisk = (movements.match(/\*/g) || []).length

  maxDistance = Math.abs(matchGt - matchLt);

  return maxDistance + matchAsterisk
}

const movements = '>>**'
const result = maxDistance(movements)
console.log(result)