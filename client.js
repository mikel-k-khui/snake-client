const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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
    // // const move = function(direction, interval, loops) {
    //   let count = 0;
    //   console.log(moves[direction], loops, interval);
    //   while (count < loops) {s
    //     setTimeout(function() {
    //       conn.write(moves[direction]);
    //     },interval);
    //     ++count;
    //   }
    // };
    // move("up", 50, 5);
  });
  //end of initial connection
  return conn;
};

module.exports = connect;