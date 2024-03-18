// Given is a number max representing the maximum number of groups in the queue.
// You also have an array visitors of people, where 'X' stands for one person and 'O' for one companion.
// A group is minimum one 'O' and any number of 'X'. Check if all groups fit into the queue. Return 'full' if all fit.
// Otherwise, return the number of groups that are too many or not full.

// Example:

// cinemaQueue(6, ['X','O','X','O','O','X','X','X','O','X']) => 'full'
// cinemaQueue(6, ['X','O','X','O','O','X','X','X','O','X','X','X']) => 'too much: 2'
// cinemaQueue(4, ['X','O','X']) => 'not full: 2'

function cinemaQueue(max, visitors) {
    const array = [...visitors];
    const groups = array.filter(i => i === 'X').length;

    if (max === groups) {
        return 'full';

    } else if (groups > max) {
        return `too much: ${groups - max}`;

    } else {
        return `not full: ${max - groups}`;
    }

}

cinemaQueue(6, ['X','O','X','O','O','X','X','X','O','X'])
cinemaQueue(6, ['X','O','X','O','O','X','X','X','O','X','X','X'])
cinemaQueue(4, ['X','O','X'])
cinemaQueue(8, ['X','O','X','X'])
cinemaQueue(5, ['X','O','X','O','O','X','X','O','X'])