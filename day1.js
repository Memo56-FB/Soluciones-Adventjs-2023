function findFirstRepeated(gifts) {
  const mapGifts = new Map()
  let firstRepeatedGift = -1
  let finded = false
  gifts.forEach(gift => {
    if(mapGifts.has(gift) && !finded) {
      finded = true
      firstRepeatedGift = gift
    } else {
      mapGifts.set(gift)
    }
  })
  return firstRepeatedGift
}

console.log(findFirstRepeated([1,2,3,4,5,5,1,2,3,4]))