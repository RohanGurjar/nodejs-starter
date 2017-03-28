var fs = require('fs');
var fileToRead = process.argv[2];
fs.readFile(fileToRead, 'utf8', function (err, contents) {
    if (err) {
        return console.log(err);
    }

    var newlines = contents.split('\n').length - 1;
    console.log(newlines);
});