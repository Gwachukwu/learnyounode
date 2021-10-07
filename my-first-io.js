const fs = require('fs');

const readFile = fs.readFileSync(process.argv[2]);

const str = readFile.toString();

const strArr = str.split('\n');

console.log(strArr.length-1);