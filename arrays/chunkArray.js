function chunkArray(arr, chunkSize) {
    const chunkedArray = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
        chunkedArray.push(arr.slice(i, i + chunkSize));
    }

    return chunkedArray;
}

const array = [0,1,2,3,4,5,6,7,8,9,10];

chunkArray(array, 2);
chunkArray(array, 3);
chunkArray(array, 4);
