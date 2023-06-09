const net = require("net");
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.write("Yup");
  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write('Name: May');
  });

  conn.on(connect, () => {
    process.write("Successfully connected to game server");
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });



  return conn;
};

module.exports = { connect };