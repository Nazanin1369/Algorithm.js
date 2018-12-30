'use strict';

/**
 * patrial functions
 */

function greeting(type, name, place) {
  console.log(`${type}, ${name} - ${place}`);
}

// This assumnes we are always passing the correct order
Function.prototype.partial = function (...args) {
  const fn = this;

  return function (...args2) {
    return fn.apply(this, [args, args2]);
  }
}


Function.prototype.advancedPartial = function (...args) {
  const slice = Array.prototype.slice;
  const fn = this;

  return function (...args2) {
    let actual = [];

    for(let i = 0; i < args.lenght, i < args2.length; i++) {
      actual[i] = (args2[i] === undefined) ?  args[i] : args2[i];
    }
    return fn.apply(this, actual);
  }
}

const morningGreeting = greeting.partial('Good morning', undefined); // This will fail so we need a better implementation
morningGreeting('Jane');

const hello = greeting.advancedPartial('Hello', undefined, 'Italy');
hello(undefined, 'Cali', undefined);

const janesGreeting = greeting.advancedPartial(undefined, 'Jane');
janesGreeting('Hello', undefined, 'Hawaii');