// Uploader utilities and helper methods
// designed to be relatively generic.

var fs = require('fs');
var Writable = require('stream').Writable;

exports.documentReceiverStream = function (options) {
    var defaults = {
        dirname: '/dev/null',
        saveAs: function (file) {
            return file.filename;
        },
        completed: function (file, done) {
            done();
        }
    };

    // I don't have access to jQuery here so this is the simplest way I
    // could think of to merge the options.
    opts = defaults;
    if (options.dirname) opts.dirname = options.dirname;
    if (options.saveAs) opts.saveAs = options.saveAs;
    if (options.completed) opts.completed = options.completed;

    var documentReceiver = Writable({
        objectMode: true
    });

    // This `_write` method is invoked each time a new file is received
    // from the Readable stream (Upstream) which is pumping filestreams
    // into this receiver.  (filename === `file.filename`).
    documentReceiver._write = function onFile(file, encoding, done) {
        //sails.log(file.mimetype);
        //sails.log("---------------");
        sails.log(file);
        //sails.log(file.headers);
        //sails.log(file.headers.content - type);
        var newFilename = opts.saveAs(file);
        var fileSavePath = opts.dirname + newFilename;
        var outputs = fs.createWriteStream(fileSavePath, encoding);
        file.pipe(outputs);


        // Garbage-collect the bytes that were already written for this file.
        // (called when a read or write error occurs)
        function gc(err) {
            sails.log.debug("Garbage collecting file '" + file.filename + "' located at '" + fileSavePath + "'");

            fs.unlink(fileSavePath, function (gcErr) {
                if (gcErr) {
                    return done([err].concat([gcErr]));
                } else {
                    return done(err);
                }
            });
        };

        file.on('error', function (err) {
            sails.log.error('READ error on file ' + file.filename, '::', err);
        });

        outputs.on('error', function failedToWriteFile(err) {
            sails.log.error('failed to write file', file.filename, 'with encoding', encoding, ': done =', done);
            gc(err);
        });

        outputs.on('finish', function successfullyWroteFile() {
            sails.log("檔案完成輸出");
            /*var sizeOf = require('image-size');
            var dimensions = sizeOf(newFilename);
            console.log(dimensions.width, dimensions.height);*/
            opts.completed({
                name: file.filename,
                size: file.size,
                localName: newFilename,
                path: fileSavePath,
                header: file.headers
            }, done);
        });

    };

    return documentReceiver;
}