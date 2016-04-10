/**
 * Dynamic programming implementation of LIS problem_longest increasing subsequence
 */
function findLIS(arr, len) {
    //var max = 0;
    var lis = [];

    for(var i = 0; i < len; i++) {
        lis[i] = 1;
    }

    for(var i = 0; i < len; i++) {
       console.log(lis[i])
    }

    //Compute optimized LIS values in bottom up manner
    for(var i = 0; i < len; i++) {
        for(var j = 0; j < i; j++) {
            if(arr[i] > arr[j] && lis[i] < lis[j] + 1) {
                lis[i] = lis[i] + 1;
            }
        }
    }

    //Pick maximum of all LIS values
    max = Math.max.apply(null, lis);

    return max;
}

var arr = [10, 22, 9, 33, 21, 50, 41, 60];
console.log(findLIS(arr), arr.length);