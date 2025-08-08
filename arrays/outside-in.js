function outsideIn(outside, inside) {
  const i = new Set(inside);
  const o = new Set(outside);
  return !i.difference(o).size
}

outsideIn(
  [0,6,3,7,2],
  [2,6,3,0,7]
)

outsideIn([1],[0,1])

outsideIn([0,1],[1])

outsideIn(
  [4,1,6,1,5,9],
  [4,1,5,9,3]
)

outsideIn(
  [1,8,3,6,1],
  [8,3,6,1]
)

outsideIn(
  [0,1,0],
  [1,0,1]
)