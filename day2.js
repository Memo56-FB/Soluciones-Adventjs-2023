// !Complejidad cognitiva: 3
function manufacture(gifts, materials) {
  const materialsArray = materials.split('');

  function canManufacture(gift) {
    return [...gift].every(giftLetter => materialsArray.includes(giftLetter));
  }

  return gifts.filter(canManufacture);
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials))