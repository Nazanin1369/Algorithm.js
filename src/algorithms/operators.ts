/*
* Given an array of numbers of length n, and an array of math operators of length m,
* where n = m+1. Perform math operations in order of operators and numbers
*/
const numbers = [5, 2, 3, 4];
const operators = ['+', '-', '/'];
// ((1+2) - 3) / 4

const doTheMath = {
  '+': (x,y) => x+y,
  '-': (x,y) => x-y,
  '/': (x,y) => x/y
}

const performOperationInPlace = (numbers, operators) => {
  for(let operator of operators) {
    numbers.unshift(doTheMath[operator](numbers.shift(), numbers.shift()));
  }

  return numbers[0];
}

console.log(performOperationInPlace(numbers, operators))