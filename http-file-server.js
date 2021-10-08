const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const str = fs.createReadStream(process.argv[3]);

  str.on("open", () => str.pipe(res));

  str.on("error", (err) => str.end(err));
});

server.listen(Number(process.argv[2]));
