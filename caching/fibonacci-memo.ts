export function memoize(fn: (n: number) => number) {
    const cache = new Map();

    return (n: number) => {
        const key = JSON.stringify(n);

        if (cache.has(key)) return cache.get(key);

        const fib = fn(n);
        cache.set(key, fib);
        return fib;
    }
}

const fibonnaciNumber = memoize((n: number) => {
    if (n <= 1) return n;
    const fib = fibonnaciNumber(n - 1) + fibonnaciNumber(n - 2);
    return fib;
});

const memoFib = memoize(fibonnaciNumber);

console.time("run time");
console.log(memoFib(50))
console.timeEnd("run time")
console.time("run time");
console.log(memoFib(50))
console.timeEnd("run time")

/**
 * ! without memoization: n = 50, on first call =
 * 12586269025
 * run time: 1:57.568 (m:ss.mmm)
 * 
 * ! with memoization: n = 50, on first call =
 * 12586269025
 * run time: 3.822ms
 * Speedup: 117.568 / 0.003822 ≈ 30,760x faster
 * 
 * ! with memoization: n = 50, on second call = 
 * 12586269025
 * run time: 0.062ms
 * Speedup: 3.822 / 0.062 ≈ 61.6x faster
 */
