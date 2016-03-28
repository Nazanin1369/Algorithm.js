var _ = require('underscore')


/**
 * We have an array of objects A and an array of indexes B.
 *  Reorder objects in array A with given indexes in array B. Do not change array A's length.
 */

var A = ['C', 'D', 'E', 'F', 'G'],
    B = [3, 0, 4, 1, 2]
    C = [];

_.each(A, function(letter, index) {
   C[B[index]] = letter;
});
console.log(C);


//*********************************************

var boeadingPasses = [
    {
        source: 'C',
        destination: 'D'
    },
    {
        source: 'A',
        destination: 'B'
    },
    {
        source: 'D',
        destination: 'E'
    },
    {
        source: 'B',
        destination: 'C'
    }
];

function findSouceAndDestination() {
    var sourceMap = {};
    var destMap = {};
    while(boeadingPasses.length !== 0) {
        var pass = boeadingPasses.pop();

        if(!sourceMap[pass.source]) {
            sourceMap[pass.source] = true;
        }

        if(!destMap[pass.destination]) {
            destMap[pass.destination] = true;
        }

        if(sourceMap[pass.destination]) {
             delete(sourceMap[pass.destination]);
             delete(destMap[pass.destination]);
        }

        if(destMap[pass.source]) {
             delete(destMap[pass.source]);
             delete(sourceMap[pass.source]);
        }
    }
    return {'from': sourceMap, 'to': destMap};
}

//console.log(findSouceAndDestination());


//***********************************



function isNumber(st) {
    for(var i = 0; i < st.length; i++) {
        var c = st.charAt(i);
        if(!((c >= 0 && c <=9) || (c === '.' && i > 0))) {
            return false;
        }
    }
    return true;
 }

console.log(isNumber('38.9'));


//**********************************


var JD = {};

JD.debounce = function(func, wait, immediate) {

}



console.log(flatten([1,undefined,[2,[3]],[4]])); // => [1,undefined,2,3,4]

//O(n)
function flatten(arr) {

  var result = [];
  var toStringFn = Object.prototype.toString;
  var nodes = arr && arr.slice();
  var node;

  if(!arr.length) {
    return result;
  }


  while (nodes.length) {

    node = nodes.pop();
    if(toStringFn.call(node) === '[object Array]') {
      nodes.push.apply(nodes, node);
    } else {
      result.push(node);
    }

  }

  result.reverse();
  return result;
}
// result = [1,undefined,3,2]  2,3,undefined,1



// Recursive
var backtrack = function (list, items) {
    if(String.prototype.toString.call(list) !== '[object Array]') {
        items.push(list);
    }
    for(var x in list) {
        backtrack(list[x], items);
    }
}

/**
 * Knapsack
 */
backpack = (i, M, w, p) => {
    d = Array(M+1).fill(i=0)
    d[M]=1
    for(x of w) {
        for(y in d)
            if(x<=M && d[x++]) d[y]=Math.max(d[y],d[x-1]+p[i])
        i++
    }
    return d[0]-1
}

/**
 * Given some time output the time after one second.

        Example

For currentTime = [23, 59, 59], the output should be
nextSecond(currentTime) = [0, 0, 0].
 */
function nextSecond(currentTime) {
    var t = [0, 0, 0]
    if(currentTime[2] + 1 == 60) {
        t[2] = 0;
        if(currentTime[1] + 1 == 60) {
            t[1] = 0;
            if(currentTime[0] + 1 == 24) {
                t[1] = 0;
                t[0] = 0;
                t[2] = 0;
            }else {
                t[0] = currentTime[0] + 1;
                t[1] = 0;
                t[2] = 0;
            }
        }else {
            t[1] = currentTime[1] + 1;
            t[0] = currentTime[0]
        }
    }else {
         t[2] = currentTime[2] + 1;
        t[1] = currentTime[1];
        t[0] = currentTime[0];
    }
    return t;
}


/**
 * Reverse bits
 */
function mirrorBits(a) {
  var b = 0;
  while (a > 0) {
    b <<= 1;
    b |=  a&1 ;
    a >>= 1;
  }

  return b;
}

