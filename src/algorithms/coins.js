/**
 * Given an infinite number of quarters, dimes and nickles and pennies
 * Write code to calculate the number of ways to represent cents.
 */


var map = {};
function placeCoins(rem) {
    var coins = [1, 5, 10, 25],
        count = 0;
    if(rem === 0) {
      console.log("-------1-------");
      return 1;
    }
    console.log("------------");
    for(var i in coins) {
        var temp = rem - coins[i];
        console.log(rem + ", " + coins[i]);
        if(map[rem + "," + coins[i]])
            continue;
        if(temp >= 0) {
            count  += placeCoins(temp);
        }
        map[rem + "," + coins[i]] = 1;
    }
    console.log("------------");
    return count;
}
//console.log(placeCoins(10));


function change(S, m, n) {
    if (n === 0)
        return 1;

    // If n is less than 0 then no solution exists
    if (n < 0)
        return 0;

    // If there are no coins and n is greater than 0, then no solution exist
    if (m <=0 && n >= 1)
        return 0;

    // count is sum of solutions (i) including S[m-1] (ii) excluding S[m-1]
    return change( S, m - 1, n ) + change( S, m, n-S[m-1] );
}
var c = [1, 5, 10, 25]
console.log(change(c, c.length, 10));