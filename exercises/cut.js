'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code :

function cutFirst(str) {
    str = str.slice(2);
    return (str);
}

function cutLast(str) {
    str = str.slice(0, (str.length - 2));
    return (str);
}

function cutFirstLast(str) {
    str = cutFirst(str);
    str = cutLast(str);
    return (str);
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(cutFirst('foobar'), 'obar');
assert.strictEqual(cutLast('foobar'), 'foob');
assert.strictEqual(cutFirstLast('foobar'), 'ob');

// assert.fail('You must write your own tests')
// End of tests */
