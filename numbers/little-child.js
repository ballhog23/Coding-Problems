// Given are two variables child1 and child2 with a numeric value between 0 and 99.
// Return true if a child is between 0 and 14 (0 and 14 inclusive).
// Return false if both or none in between.

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
