function littleChild(child1, child2) {
    if (child1 < 15 && child1 > -1 && child2 < 15 && child2 > -1) return false;
    else if (child1 < 15 && child1 > -1 || child2 < 15 && child2 > -1) return true;
    else return false;
}

littleChild(4,15)
// true

littleChild(9,7)
// false

littleChild(21,20)
// false

littleChild(0,3)
// false

littleChild(15,13)
// true

littleChild(-3,11)
// true

littleChild(-5,-11)
// false
