const array = [1, 2, 3, 4, 5];

const mapArray = (array) => array.map(i => i * 2)

const filterArray = (array) => array.filter(i => i <= 2)

const findInArray = (array) => array.find(i => i > 3)

const includedInArray = (array) => array.includes(4)

// const reducedArray = (array) => array.reduce((accumulator, currentElement, currentIndex, array) => accumulator + currentElement, 0)

const objectsArray = [{count: 1},{count: 2},{count: 3},{count: 4}, {count:5}];

// take an array of objects and sum the count property of each object
const reducer = (accumulator, currentElement, currentIndex, array) => {
    return accumulator + currentElement.count;
}

const reducedArray = (array) => array.reduce(reducer, 0)

console.log(reducedArray(objectsArray));