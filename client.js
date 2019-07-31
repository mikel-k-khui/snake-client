const net = require('net');
const consts = require('./constants');

// const move = function(direction, interval, loops) {
//   let count = 0;
//   console.log(consts[direction], loops, interval);
//   while (count < loops) {
//     setTimeout(function() {
//       conn.write(consts[direction]);
//     },interval*count);
//     ++count;
//   }
// };

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: consts["IP"],
    port: consts["PORT"]
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(`Your data was`, data);
  });
  // successfully made connection
  conn.on('connect', () => {
    console.log(`Successfully connected to game server`);
  });
  // inital setup
  conn.on('connect', () => {
    conn.write("Name: MKC");
    // conn.write("Move: down");
    // conn.write("Move: down");
    // move("up", 50, 5);
  });
  //end of initial connection
  return conn;
};

module.exports = connect;