function myFunction(a) {
    return Object.values(a).reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
}

myFunction({a:1,b:2,c:3})
myFunction({j:9,i:2,x:3,z:4})
myFunction({w:15,x:22,y:13})