// Write a function that takes two date instances as argument.
// It should return true if the difference between the dates is less than or equal to 1 hour.
// It should return false otherwise.

// 3,600,000 milliseconds in one hour = 3600 seconds in one hour * 1000 ms in one second

function withinAnHour(a,b) {
    const msInOneHour = 3600000;

    // using Math.abs to ensure a positive integer
    const dif = Math.abs(a.getTime() - b.getTime());

    return dif <= msInOneHour;
}

// Test cases:
// Time difference is 45 minutes, within one hour.
withinAnHour(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')); // true

// Time difference is 15 minutes, within one hour.
withinAnHour(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00')); // true

// Time difference is 1 hour and 45 minutes, exceeding one hour.
withinAnHour(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00')); // false

// Time difference is exactly 1 hour, within one hour.
withinAnHour(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00')); // true