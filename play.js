const connect = require('./client');
const setupInput = require('./input');
const const = require('./constants');
console.log('Connecting ...');

setupInput(connect(const));