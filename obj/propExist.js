function myFunction(a,b) {
    return Object.keys(a).includes(b)
}

myFunction({a:1,b:2,c:3},'b')
myFunction({x:'a',y:'b',z:'c'},'a')
myFunction({x:'a',y:'b',z:undefined},'z')