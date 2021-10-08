const net = require("net");

const server = net.createServer((socket) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const time =
    year + "-" + month + "-" + day + " " + hours + ":" + minutes + "\n";

  socket.end(time);
});

server.listen(process.argv[2]);
