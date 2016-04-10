/**
 * GIven a string "str" and pair of "N" swapping indices, generate a lexicographically largest string. Swapping indices can be reused any number times.
 * Eg 1) String = "abdc" Indices: (1,4) (3,4)
 * Answer: cdba, cbad, dbac,dbca
 * ​you should print only "dbca" which is lexicographically largest.
 */

function biggestPermutation(str, indices) {
    var permutations = [str];
    var indexToGenerateFrom = 0;
    while(indexToGenerateFrom <= permutations.length -1 ) {
        for(var i = 0; i < indices.length; i++) {
            var permutation = applyPermutations(permutations[indexToGenerateFrom], indices[i]);
            if(permutations.indexOf(permutation) === -1) {
                permutations.push(permutation);
            }
        }
        indexToGenerateFrom++;
    }

    return permutations.sort().pop();
}

function applyPermutations(str, indices) {
    var arr = str.split('');
    var temp = arr[indices[0] - 1];
    arr[indices[0] - 1] = arr[indices[1] - 1];
    arr[indices[1] - 1] = temp;
    return arr.join('');

}

console.log(biggestPermutation("abcde", [[1,4], [3,4]]))