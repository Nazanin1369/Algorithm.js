'use strict';

function fibonacci(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

function memoizedFib(n, memo) {
    if (typeof memo[n] !== 'undefined') {
        return memo[n];
    }

    var fib = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);

    if (typeof memo[n] === 'undefined') {
        memo[n] = fib;
    }

    return fib;
}

function tailedRecursiveFib(n, a, b) {
    if (n === 0) {
        return a;
    }

    if (n === 1) {
        return b;
    }

    return tailedRecursiveFib(n - 1, b, a + b);

}

console.log(fibonacci(15));
console.log(memoizedFib(15, { 0: 0, 1: 1 }));
console.log(tailedRecursiveFib(15, 0, 1));