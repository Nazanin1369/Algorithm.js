const { createLinkedlist } = require('../datastructures/js/linkedlist');

function rotate(list, times) {
    const size = list.length;
    const timesToRotate = getRotationTimes(size, times);

    if(timesToRotate === 0) {
        return list;
    }

    let prevHead = list.head;
    let rotationInfo = findRotationPoint(list, timesToRotate);
    // Change the head to the new head
    list.head = rotationInfo.newHead;
    // Break the connection on the point
    rotationInfo.penultimate.next = null;
    // Move the first portion to the end
    list.tail.next = prevHead;
    list.tail = rotationInfo.penultimate;

    return list;
}

function getRotationTimes(size, times) {
    return times % size;
}

function findRotationPoint(list, timesToRotate) {
    let newHead = list.head;
    let penultimate;
    let i = 0;
    while(i < timesToRotate) {
        penultimate = newHead;
        newHead = newHead.next;
        i++;
    }
    return {newHead, penultimate};
}

const list = createLinkedlist();
const values = ['a', 'b', 'c', 'd', 'e'];
const nodes = values.map(val => list.push(val));

console.log(list.print())
console.log(rotate(list, 21).print());