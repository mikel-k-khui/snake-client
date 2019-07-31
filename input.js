let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

const move = function(connect, direction, interval, loops) {
  let count = 0;
  console.log(moves[direction], loops, interval);
  while (count < loops) {
    setTimeout(function() {
      connect.write(moves[direction]);
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

const moves = {
  "'\u0003'": process.exit,
  "up": "Move: up",
  "down": "Move: down",
  "left": "Move: left",
  "right": "Move: right"
  "queen": "Yas! Queen"
};

const handleUserInput = function(input) {
  // process.stdout.write("Checking intput\n");
  // let command = moves[input];
  // command;

  switch (input) {
  case '\u0003':
    process.stdout.write("Thanks for playing snake, ciao!\n");
    process.exit();
    break;
        
  case 'w':
  case 'W': connection.write(moves["up"]); break;
 
  case 'a':
  case 'A': connection.write(moves["left"]); break;
    
  case 's':
  case 'S': connection.write(moves["down"]); break;
    
  case 'd':
  case 'D': connection.write(moves["right"]); break;

  case 'q':
  case 'Q': connection.write(moves["queen"]); break;
    
  default:
    break;
  }
  // if (input === '\u0003') {
  //   process.stdout.write("Thanks for playing snake, ciao!\n");
  //   process.exit();
  // }
};

module.exports = setupInput;