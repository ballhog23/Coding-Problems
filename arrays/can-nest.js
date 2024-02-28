/*
Create a function that returns true if the first array can be nested inside the second and false otherwise.

arr1 can be nested inside arr2 if:
    arr1's min is greater than arr2's min.
    arr1's max is less than arr2's max.
*/

function canNest(arr1, arr2) {
	let arrOneMin = Math.min(...arr1);
    let arrOneMax = Math.max(...arr1);
	let arrTwoMin = Math.min(...arr2);
    let arrTwoMax = Math.max(...arr2);

   return console.log(arrOneMin > arrTwoMin ? (arrOneMax < arrTwoMax ? true : false) : false)
}

canNest([1, 2, 3, 4], [0, 6]) // true
canNest([9, 9, 8], [8, 9, 10]) // false