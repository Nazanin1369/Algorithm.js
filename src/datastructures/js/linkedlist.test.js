const { createLinkedlist } = require('./linkedlist');

describe('LinkedList', () => {
    let list;
    beforeEach(() => {
        list = createLinkedlist();
    });

    test('intially list is empty', () => {
        expect(list.isEmpty()).toBeTruthy();
    });

    test('populate the list with one item',  () => {
        list.push('a');
        expect(list.pop().value).toEqual('a');
    });
});