function myFunction(a, b){
let set = new Set(a);
let union = new Set([...set,...b]);
    return union
}


myFunction(new Set('123'), new Set('234'))
myFunction(new Set([1, 2, 3]), new Set([3, 4, 5]))
myFunction(new Set([false, false, NaN]), new Set([true, true, NaN]))