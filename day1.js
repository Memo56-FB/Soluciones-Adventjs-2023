function findFirstRepeated(gifts) {
  const giftList = new Set();
    for (const gift of gifts) {
      if (giftList.has(gift)) {
        return gift; // Devuelve el primer regalo repetido
      } else {
        giftList.add(gift);
      }
    }
  return -1; // Si no se encuentra ninguna ocurrencia repetida
}
console.log(findFirstRepeated([1,2,3,4,5,3,4,1]))