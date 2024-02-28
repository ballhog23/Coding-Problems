// write a function that takes an array of integers as an argument
// the function should return an array of unique integers
// do not use .includes() or new Set()

const inputArray = [1, 2, 3, 3, 4, 4, 1, 5, 6, 7, 8, 8, 9, 3, 4, 5, 10, 10, 10, 20];

const uniqueArrayFunction = (array) => {
    const uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
        let isUnique = true

        for (let k = 0; k < uniqueArray.length; k++) {
            if (uniqueArray[k] === array[i]) {
                isUnique = false;
                break;
            }
        }

        if (isUnique === true) {
            uniqueArray.push(array[i]);
        }
    }
    
    return console.log(uniqueArray)
}

uniqueArrayFunction(inputArray)
