// Write a function that takes a Set and a value as argument.
// If existing in the Set, remove the value from the Set.
// Return the result

function deleteIfHas (set, val) {

    if (set.has(val) === true) {
        set.delete(val)
        return set
    }
    
    return set;
}

deleteIfHas(new Set([1, 2, 3]), 1)
deleteIfHas(new Set('12345'), '3')
deleteIfHas(new Set([1, 2, 3]), 4)