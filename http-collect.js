const http = require("http");

http.get(process.argv[2], (res) => {
  res.setEncoding("utf8");

  let str = "";

  res.on("data", (data) => {
    str += data;
  });

  res.on("error", console.log);

  res.on("end", () => {
    console.log(str.length);
    console.log(str);
  });
});
