/**
 * @return {Generator<number>}
 */

var fibGenerator = function*() {
    // determine the sequence length: 0 <= callCount <= 50
    // initialize variables to keep track of the last two numbers in sequence
    let previousOne = 0, previousTwo = 1, fibNum;
    // always yeild the first two values
    yield 0;
    yield 1;

    // loop over numbers within sequence length
    for (let i = 2; i < 51; i++) {
        fibNum = previousOne + previousTwo
        yield fibNum
        previousOne = previousTwo
        previousTwo = fibNum 
    }
};


const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
