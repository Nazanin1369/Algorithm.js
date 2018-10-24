/*
*Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴
* You can assume the input string only contains lowercase letters.
*
* Examples:
*
* "civic" should return true
* "ivicc" should return true
* "civil" should return false
* "livci" should return false
*/

// Track characters we've seen an odd number of times
let charSet = new Set();

const isPalindrome = (str: string): boolean => {
  for(let char of str) {
    if(charSet.has(char)) {
      charSet.delete(char);
    } else {
      charSet.add(char);
    }
  }

  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return charSet.size <= 1;
}

console.log(isPalindrome('civic'));
console.log(isPalindrome('livci'));