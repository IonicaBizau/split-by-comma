"use strict";

const splitByComma = require("../lib");

console.log(splitByComma("foo,bar, baz"));
// => [ 'foo', 'bar', 'baz' ]

console.log(splitByComma("1,  2, 3,4"));
// => [ '1', '2', '3', '4' ]
