export class Heap {
    list: Array<number>;
    scoreFunction: Function;

    constructor(scoreFunction: Function) {
        this.list = [];
        this.scoreFunction = scoreFunction;
    }

    push(num): void {
        // Add the new numnber to the end of the array
        this.list.push(num);

        // Allow the number to move up along the array until the min is the first element
        this.moveUp(this.list.length - 1)
    }

    pop(): number {
        let element = this.list[0];
        let lastElement = this.list.pop();

        if (this.list.length > 0) {

            this.list[0] = lastElement;
            this.moveDown(0);
        }

        return element;
    }

    moveUp(index: number) {
        let element = this.list[index];
        const score = this.scoreFunction(element);

        while (index >= 0) {
            // Get the parent element
            let parentIndex = Math.floor(index / 2);
            let parent = this.list[parentIndex];

            if (this.scoreFunction(parent) <= score) {
                break;
            }

            this.list[parentIndex] = element;
            this.list[index] = parent;
            index = parentIndex;

        }
    }

    moveDown(index: number) {
        const length = this.list.length;

        let element = this.list[index];
        let score = this.scoreFunction(element);

        while (true) {
            let firstChildIndex = (2 * index) + 1;
            let secondchildIndex = firstChildIndex + 1;
            let indexToSwap = null;
            let firstChildScore;
            let secondChildScore;

            if (firstChildIndex < length) {
                let child = this.list[firstChildIndex];
                let firstChildScore = this.scoreFunction(child);

                if (firstChildScore <= score) {
                    indexToSwap = firstChildIndex;
                }
            }

            if (secondchildIndex < length) {
                let child = this.list[secondchildIndex];
                let scoreToCompare = indexToSwap === null ? score : firstChildScore;

                secondChildScore = this.scoreFunction(child);

                if (secondChildScore <= scoreToCompare) {
                    indexToSwap = secondchildIndex;
                }
            }

            // No need to swap further, we are done.
            if (indexToSwap === null) {
                break;
            }

            // Otherwise, swap and continue.
            this.list[index] = this.list[indexToSwap];
            this.list[indexToSwap] = element;
            index = indexToSwap;

        }
    }



}

const heap = new Heap(x => x);
[10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5].forEach(num => heap.push(num));
console.log(heap.list)
console.log('min is: ', heap.pop())
console.log(heap.list)
console.log('min is: ', heap.pop())
console.log(heap.list)
console.log('min is: ', heap.pop())
console.log(heap.list)
console.log('min is: ', heap.pop())
console.log(heap.list)