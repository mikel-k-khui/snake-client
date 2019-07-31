let connection;
const constants = require('./constants');

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

const move = function(connect, direction, interval, loops) {
  let count = 0;
  console.log(constants[direction], loops, interval);
  while (count < loops) {
    setTimeout(function() {
      connect.write(constants[direction]);
    },interval*count);
    ++count;
  }
};

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);

  //move(connection,"down",500,5);

  return stdin;
};

const handleUserInput = function(input) {
  // process.stdout.write("Checking intput\n");
  // let command = constants[input];
  // command;

  switch (input) {
  case '\u0003':
    process.stdout.write("Thanks for playing snake, ciao!\n");
    process.exit();
    break;
        
  case 'w':
  case 'W': connection.write(constants["up"]); break;
 
  case 'a':
  case 'A': connection.write(constants["left"]); break;
    
  case 's':
  case 'S': connection.write(constants["down"]); break;
    
  case 'd':
  case 'D': connection.write(constants["right"]); break;

  case 'q':
  case 'Q': connection.write(constants["queen"]); break;
    
  default:
    break;
  }
  // if (input === '\u0003') {
  //   process.stdout.write("Thanks for playing snake, ciao!\n");
  //   process.exit();
  // }
};

module.exports = setupInput;