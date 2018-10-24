/**
 * I want to learn some big words so people think I'm smart.
 * I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory. When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.
 * Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated." For example:
 *   const words = [
 * 'ptolemaic',
 * 'retrograde',
 * 'supplant',
 * 'undulate',
 * 'xenoepist',
 * 'asymptote',  // <-- rotates here!
 * 'babka',
 * 'banoffee',
 * 'engender',
 * 'karpatka',
 * 'othellolagkage',
 * ];
 * Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here
 */

 const findRotationPoint = (words: Array<string>): number => {

    const firstWord = words[0];

    let floorIndex = 0;
    let ceilingIndex = words.length - 1;


    while(floorIndex < ceilingIndex) {
            // Guess a point halfway between floor and ceiling
            const guessedIndex = Math.floor(floorIndex + (ceilingIndex - floorIndex) / 2);

            // If guess comes after first word or is the first word
            if(words[guessedIndex] >= firstWord) {
                 // Go right
                 floorIndex = guessedIndex;
            } else {
                 // Go left
                 ceilingIndex = guessedIndex;
            }

            // If floor and ceiling have converged
            if(floorIndex + 1 === ceilingIndex) {
                // Between floor and ceiling is where we flipped to the beginning
                // so ceiling is alphabetically first
                 break;
            }
    }


    return ceilingIndex;
 }