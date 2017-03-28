var fs = require('fs');
var contents = fs.readFileSync(process.argv[2]);
var newlineDelimitedLines = contents.toString().split('\n');
console.log(newlineDelimitedLines.length - 1);

// Alternate solution without requiring toString
// var fs = require('fs');
// var newlines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
// console.log(newlines);