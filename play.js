const connect = require('./client');
const setupInput = require('./input');
const { IP, PORT } = require('./constants');
console.log('Connecting ...');

setupInput(connect());