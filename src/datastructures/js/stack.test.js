'use strict';

const { createStack } = require('./stack');

describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = createStack();
    });

    test('is intially empty', () => {
        expect(stack.length).toEqual(0);
    });

    test('push', () => {
        stack.push('Hi');
        expect(stack.pop()).toEqual('Hi');
    });
});