'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:

function jadenCase(str) {
    let str2 = str.split(' ');
    for (let i = 0; i < str2.length; i++) {
        let word = str2[i].split('');
        word[0] = word[0].toUpperCase();
        str2[i] = word.join('');
    }
    str2 = str2.join(' ');
    return str2;
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?');
// assert.fail('You must write your own tests')
// End of tests */
