function cyberReindeer(road, time) {
  // Code here
  let result = []
    let timePassed = 0
    let pos = 0
    let aux = "."
    while (time > 0) {
        result.push(road)
        time--
        timePassed++
        if (timePassed >= 5) road = road.replace(/\|/gi, "*")
        if (road[pos+1] === '.' || road[pos+1] === '*') {
            road = road.split("")
            road[pos] = aux
            aux = road[pos+1]
            road[pos+1] = "S"
            road = road.join("")
            pos++
        }
    }
    return result
}

console.log(cyberReindeer('S.|.|...|..|....', 7))
// console.log(cyberReindeer('S..|...................', 15).length)