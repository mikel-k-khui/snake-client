const net = require('net');

const moves = {
  "up": "Move: up",
  "down": "Move: down",
  "left": "Move: left",
  "right": "Move: right"
}

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.15.216',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(`Your data was`, data);
  });
  conn.on('connect', () => {
    console.log(`Successfully connected to game server`);
  });
  conn.on('connect', () => {
    conn.write("Name: MKC");
    conn.write("Move: up");
    conn.write("Move: up");

    setTimeout(function() {
      conn.write("Move: up");
    },50);
    setTimeout(function() {
      conn.write("Move: up");
    },50);
  });


  
  return conn;
};

const move = function() {

};

module.exports = connect;