const assert = require('assert').strict
const only = require('./index')

const msg = only()

assert.strictEqual(msg, 'chuidylan', 'Test Failed')

console.log('Test Passed')
