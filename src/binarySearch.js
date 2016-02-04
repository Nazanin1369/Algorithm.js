function binaryIndexOf(searchValue) {
    var minLength = 0;
    var maxLength = this.length - 1;
    var currentIndex;
    var currentElement;

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