/*
*Write a function for doing an in-place ↴ shuffle of an array.

The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.
*/

const getRandom = (floor, ceiling) => {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
  }

  const naiveShuffle = theArray => {
    if(theArray.length < 1) {
      throw new Error('Array is empty');
    }

    // for each item in the array
    for(let i in theArray) {

      // Grab a random other index
      let randomIndex = getRandom(0, theArray.length - 1);

      //shuffle the ith element with the element in the random index
      if(i !== randomIndex) {
        let temp = theArray[i];
        theArray[i] = theArray[randomIndex];
        theArray[randomIndex] = temp;
      }
    }

    return theArray;
  }
  const uniformShuffle = theArray => {
    if(theArray.length < 1) {
      throw new Error('Array is one or less than one element');
    }

    for(let i = 0; i < theArray.length - 1; i++) {
      // get a random index
      // Choose a random not-yet-placed item to place there
      // (could also be the item currently in that spot)
      // must be an item AFTER the current item, because the stuff
      // before has all already been placed
      let randomIndex = getRandom(i, theArray.length - 1);

      // Place our random choice in the spot by swapping
       if(i !== randomIndex) {
        let temp = theArray[i];
        theArray[i] = theArray[randomIndex];
        theArray[randomIndex] = temp;
      }
    }

    return theArray;
  }

  const arr = [1, 2, 3, 4, 5];
  console.log('Random Naive Shuffle: ', naiveShuffle(arr));
  console.log('Uniform Shuffle: ', uniformShuffle(arr));