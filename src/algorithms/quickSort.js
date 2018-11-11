
var A = ['C', 'D', 'E', 'F', 'G'],
    B = [3, 0, 4, 1, 2];

function quickSort(array, left, right) {
    var index;
    if(array.length > 1) {
        index = partition(array, left, right);
        if(left < index - 1) {
            quickSort(array, left, index - 1);
        }

        if(right > index) {
            quickSort(array, index, right);
        }
    }
    return array;
}

function partition(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)],
        i = left,
        j = right;

    while(i <= j) {
        while(array[i] < pivot) {
            i++;
        }

        while(array[j] > pivot) {
            j--;
        }
        swap(array, i, j);
        console.log(array)
        i++;
        j--;

    }
    return i;
}

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    var t = A[i];
    A[i] = A[j];
    A[j] = t;


}

var items = [4, 2, 6, 5, 3, 9];
//console.log(quickSort(items, 0, items.length - 1));



console.log(quickSort(B, 0, B.length - 1));
console.log(A);