// Write a function that takes an object (a) and a string (b) as argument.
// Return true if the object has a property with key 'b'.
// Return false otherwise.
// Hint: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.

function myFunction1(a,b) {
    return Object.keys(a).includes(b)
}

function myFunction2(a,b) {
    return b in a;
}

myFunction1({a:1,b:2,c:3},'b') // true
myFunction1({x:'a',y:'b',z:'c'},'a') // false
myFunction1({x:'a',y:'b',z:undefined},'z') // true

myFunction2({a:1,b:2,c:3},'b') // true
myFunction2({x:'a',y:'b',z:'c'},'a') // false
myFunction2({x:'a',y:'b',z:undefined},'z') // true