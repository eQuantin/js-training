'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code :

function keepFirst(str) {
    return str.slice(0, 2);
}

function keepLast(str) {
    return str.slice(str.length -2, str.length);
}

function keepFirstLast(str) {
    return keepFirst(str) + keepLast(str);
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst('foobar'), 'fo');
assert.strictEqual(keepLast('foobar'), 'ar');
assert.strictEqual(keepFirstLast('foobar'), 'foar')
//assert.fail('You must write your own tests')
// End of tests */
