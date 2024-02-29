function getPrice(item) {
  // \d matches a digit (equivalent to [0-9])
  // + matches the previous token one and unlimited
  // \. matches the character .
  // \d matches a digit (equivalent to [0-9])
  // {2} matches the previous token exactly 2 times
  let regex = /\d+\.\d{2}/gm
  return console.log(`$ ${item.match(regex)}`)
}

getPrice('Ice ($4.20)')
getPrice('50 pounds of ice ($54.20)')
getPrice('100 pounds of ice ($108.40')
getPrice('100 pounds of ice ($108.4023423') // throw in additional decimal places
getPrice('100 pounds of ice ($108.40.50') // throw in an extra decimal test