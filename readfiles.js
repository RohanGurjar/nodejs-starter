var fs = require('fs');
var path = require('path');
module.exports = function (directoryPath, fileExtension, callback) {
    var ext = '.' + fileExtension;
    var filteredFiles = [];
    fs.readdir(directoryPath, function(err, files) {
        if (err) {
            return callback(err);
        }

        // Using forEach loop
        files.forEach(function(file) {
            if (path.extname(file) === ext)
            {
                filteredFiles.push(file);
            }
        });

        // Better method to filter the list.
        // files = files.filter(function (file) {
        //     return path.extname(file) === ext;
        // });
        // return callback(null, files);

        return callback(null, filteredFiles);
    });
};