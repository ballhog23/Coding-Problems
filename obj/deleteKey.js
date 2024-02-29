// function myFunction(obj) {
// delete obj.b
// return obj
// }


function myFunction(obj) {
const { b, ...rest } = obj;
return 
}

myFunction({ a: 1, b: 7, c: 3 })
myFunction({ b: 0, a: 7, d: 8 })
myFunction({ e: 6, f: 4, b: 5, a: 3 })