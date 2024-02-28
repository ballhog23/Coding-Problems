// Write a function that takes two date instances as argument.
// It should return the number of days that lies between those dates.
function myFunction(a, b) {
    const dif = Math.abs(a - b);

    // Converts the time difference from milliseconds to days by dividing it successively by:
    // the number of milliseconds in a second (1000),
    // the number of seconds in a minute (60),
    // the number of minutes in an hour (60),
    // and the number of hours in a day (24)
    return dif / 1000 / 60 / 60 / 24;
}

myFunction(new Date('2020-06-11'), new Date('2020-06-01')) // Expected 10
myFunction(new Date('2000-01-01'), new Date('2020-06-01')) // Expected 7457