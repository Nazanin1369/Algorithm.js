/**
 *   You want to be able to access the largest element in a stack.
 */

const stack = [8, 3, 5, 3, 9, 1];

const getMax = (stack: Array<number>): number => {
  let localMax = 0;

  while(stack.length) {
    let num = stack.pop();
    if(num > localMax) {
      localMax = num;
    }
  }

  return localMax;
}

console.log(getMax(stack))