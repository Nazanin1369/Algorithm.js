/**
 * Fibonacci sequence is defined as follows:
 * F1 = 0, F2 = 1. For each i > 2: Fi = Fi - 1 + Fi - 2.
 * So the sequence starts with 0,1,1,2,3,5,8,13, ....
 * Your goal is to find the last digit of the nth number
 *  in this sequence, i.e. find F(n) mod 10.
 */

LastFibDigit = n => {
   return 0 || parseInt('011235831459437077415617853819099875279651673033695493257291'[n%60 - 1]);
}
//other solution
b = 1
a = 0 = false
LastFibDigit = L = n => --n ? L(n%60, b = a + (a = b))%10 : a