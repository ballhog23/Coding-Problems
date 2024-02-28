// Write a function that takes two date instances as argument.
// It should return true if they fall on the exact same day.
// It should return false otherwise.

function myFunction(a,b) {
    // The getTime() method of Date instances returns the number of milliseconds for this date since the epoch,
    // which is defined as the midnight at the beginning of January 1, 1970, UTC.
    return a.getTime() === b.getTime()
}

myFunction(new Date('2000/01/01'), new Date('2000/01/01')) // true
myFunction(new Date('2000/01/01'), new Date('2000/01/02')) // false
myFunction(new Date('2001/01/01'), new Date('2000/01/01')) // false
myFunction(new Date('2000/11/01'), new Date('2000/01/01')) // false