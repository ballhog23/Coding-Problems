// Write a function that takes a Set and a value as argument.
// If existing in the Set, remove the value from the Set.
// Return the resultfunction

function deleteIfHas (set, val) {
    if (set.has(val) === true) {
        set.delete(val)
        return console.log(set)
    } else {
        return console.log(set);
    }
}

deleteIfHas(new Set([1, 2, 3]), 1)
deleteIfHas(new Set('12345'), '3')
deleteIfHas(new Set([1, 2, 3]), 4)