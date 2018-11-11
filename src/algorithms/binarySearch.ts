const binaryIndexOf= searchValue => {
    let currentIndex,
        currentElement,
        maxLength = this.length - 1,
        minLength = 0;

    while(minLength <= maxLength) {
        currentIndex = (minLength + maxLength) / 2 | 0;;
        currentElement = this[currentIndex];
        if(currentElement < searchValue) {
            minLength = currentIndex + 1;
        } else if (currentElement > searchValue) {
            minLength = currentIndex - 1;
        } else {
            return currentIndex;
        }
    }
    return -1;
}