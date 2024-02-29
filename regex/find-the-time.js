// given a string
// find the time within the string
// the time format is in 24-hour notation
// you can assume that the seconds are not included

const str = "Breakfast at 09:00 in the room 123:456.";
// \b is boundary
// In the context of finding time in a string, it ensures that the time is not part of a larger sequence of digits or characters.
const regex = /\b([0-9]{2}:[0-9]{2})\b/gm

console.log(str.match(regex))