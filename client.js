const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.write("Yup");
  conn.on("connect", () => {
    conn.write("Name: Yup!");
    conn.write('Hmmm!');
  });



  return conn;
};

module.exports = {connect};