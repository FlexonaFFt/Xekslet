import assert from 'assert';
import factorial from './functions.js';

// Example
assert.equal(factorial(2), 2);
assert.equal(factorial(3), 6);

// BEGIN (write your solution here)
assert.equal(factorial(0), 1);
assert.equal(factorial(1), 1);
assert.equal(factorial(5), 120);
// END