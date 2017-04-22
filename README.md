# count-bits
It is helper for counting bits in numbers

## Install
    npm install count-bits --save

## Usage
    var countBits = require('count-bits');
    countBits(15) === 4; // true, 15 === 1111
    countBits(16) === 1; // true, 15 === 1000

## Specialty
This package works much faster than analogs.
Because it does not look for a substring in a string and does not use regular expressions.

## Testing
    npm test
