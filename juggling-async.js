const http = require("http");
const bl = require("bl");

const urls = [process.argv[2], process.argv[3], process.argv[4]];
let results = [];
let count = 0;

urls.forEach((url) => {
  http.get(url, (res) => {
    res.pipe(
      bl(function (err, data) {
        if (err) return console.error(err);

        results[urls.indexOf(url)] = data.toString();
        count++;

        if (count == 3) results.forEach((result) => console.log(result));
      })
    );
  });
});
