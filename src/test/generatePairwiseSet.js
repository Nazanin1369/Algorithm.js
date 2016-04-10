/**
 * Given a set of numbers {x1, x2, x3, x4, ..., xN} (N>=3) a set of its pairwise sums is {x1+x2, x1+x3, x1+x4, x2+x3,x2+x4,x3+x4, ...,}. (That is s_k = x_i + x_j where i != j)
 * Restore a set of numbers given a set of its pairwise sums.
 * Note: you don't know given some k, to which i and j it refers, (i.e. input is given in undefined order)
 * Example:
 * S = {1, 5, 10, 100} (n elements)
 * P = {6, 11, 101, 15, 105, 110} (n * (n - 1) / 2 elements)
 * Given P you have to restore S.
 * Note here means that if you knew which element in P corresponded to which pair of indices in S, you could just solve a simple linear equation
 * x1+x2=a{k1} x2+x3 = a{k2}, ...., x{n-1} + x{n} = a{k{n-1}, x{n} + x1 = a{k{n}}
 */

function generateOriginalSet(p) {
    var len = p.length - 1;
    var lenOfN = findLengthOfN(len);
    console.log(lenOfN);
    var s = [];
    s[lenOfN - 1] = (p[len] + p[len - 1] - p[len - 2]) / 2;
    s[0] =  p[lenOfN - 2] - s[lenOfN - 1];
    for(var i = 1; i < lenOfN - 1 ;i++) {
        s[i] = p[i - 1] - s[0];
    }
    return s;
}

function findLengthOfN(len) {
    var found = false,
        i = 1;
    while(!found) {
        if(i * (i - 1) === 12) {
            found = true;
        } else {
            i++;
        }
    }
    return i;
}

var p = [6, 11, 101, 15, 105, 110];
var p2 = [5, 7, 8, 8, 9, 11];
var p3 = [3, 4, 5]
console.log(generateOriginalSet(p3));