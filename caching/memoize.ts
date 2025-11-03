export function memoize<Args extends unknown[], R>(fn: (...args: Args) => R): (...args: Args) => R {
    const cache = new Map()

    return (...args: Args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log('returning from cache');
            return cache.get(key) as R;
        }

        console.log('storing in cache');
        const result = fn(...args);
        cache.set(key, result);
        return result
    }
}

const add = (a: number, b: number) => {
    return a + b
}

// const memoAdd = memoize(add)
// console.log(memoAdd(20, 20))
// console.log(memoAdd(20, 20))
// console.log(memoAdd(20, 21))
// console.log(memoAdd(21, 20))
