/**
 * @name recursiveFib - recursive version Theta(2^n/2)
 * @description recursive version on Fibbonacci computing - bad solution
 **/
var recursiveFib = function(n) {
  return (n <= 2) ? (1) : (recursiveFib(n-1) + recursiveFib(n-2));
};

console.log('recursiveFib: ', recursiveFib(10));


/**
 * @name memoizedFib - memoized O(n)
 * @description topologocal sort of the subproblems dependency DAG
 **/
var memoizedFib = function(n) {
    var f, map = {};
    if(map[n]) { return map[n]; }
    (n <= 2) ? f = 1 : f =  memoizedFib(n - 1) + memoizedFib(n - 2);
    (map[n] === 'undefined') && (map[n] = f);
    return f;
};

console.log('memoizedFib: ', memoizedFib(10));

/**
 * @name bottomUpFib - Bottom-up O(n)
 * @description does exactly the same computation as memoized: topologocal sort of the subproblems dependency DAG
 * Saving space ? only save the last two values
 **/
var bottomUpFib = function(n) {
    var f, map = {};
    for(var k = 0;  k <= n; k++) {
      (k <= 2) ? f = 1 : f =  map[k - 1] + map[k - 2];
      map[k] = f;
    }
    return map[n];
}

console.log('bottomUpFib: ', bottomUpFib(10));

//Best O(log(n)) to get implemented
