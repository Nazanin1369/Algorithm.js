'use strict';

/**
 * patrial functions
 */

function greeting(type, name, place) {
  console.log(`${type}, ${name} - ${place}`);
}

// This assumnes we are always passing the correct order
Function.prototype.partial = function () {
  const slice = Array.prototype.slice;
  const fn = this;
  const args = slice.call(arguments);

  return function () {
    return fn.apply(this, args.concat(slice.call(arguments)));
  }
}


Function.prototype.advancedPartial = function () {
  const slice = Array.prototype.slice;
  const fn = this;
  const args = arguments;

  return function () {
    let actual = [];

    for(let i = 0; i < args.lenght, i < arguments.length; i++) {
      actual[i] = (arguments[i] === undefined) ?  args[i] : arguments[i];
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