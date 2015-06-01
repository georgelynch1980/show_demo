/**
 * PageFileController
 *
 * @description :: Server-side logic for managing pagefiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var uuid = require('node-uuid'),
    path = require('path');
module.exports = {
    find: function (req, res,next) {
        var params = req.params.all();
        sails.log(req.param('id'));
        var pageBy = req.param('id');
        PageFile.find({
            where: {
                pageBy: pageBy
            },
            sort: 'id DESC'
        }).exec(function (err, pageFile) {
            //sails.log(projects);
            return res.view('edit', {
                data: params,
                pageFile: pageFile,
                layout: 'layout'
            });
        });
    },
    destroy: function (req, res,next) {
        var id = req.param('id');
        var pageBy = req.param('pageBy');
        if (!id) {
            return res.badRequest('No id provided.');
        }

        PageFile.findOne(id, function (err, data) {
            if (data === undefined) return res.notFound();
            if (err) return next(err);

            PageFile.destroy(id, function (err) {
                if (err) return next(err);
                return res.redirect('/edit?id=' + pageBy);

            });
        });
    },
    upload: function (req, res,next) {
        var results = [];
        var streamOptions = {
            dirname: sails.config.appPath + "/assets/images/",
            saveAs: function (file) {
                var filename = file.filename,
                    newName = uuid.v4() + path.extname(filename);
                return newName;
            },
            completed: function (fileData, next) {
                sails.log(fileData.headers);

                //sails.log("---------------");
                //sails.log(files);
                //sails.log("---------------");

                results.push({
                    id: fileData.id,
                    url: 'images/' + fileData.localName
                });


                next();
            }
        };

        req.file('file').upload(Uploader.documentReceiverStream(streamOptions),
            function (err, files) {
                //sails.log(files);
                if (err) return res.serverError(err);


                PageFile.create({
                    title: req.param('title'),
                    path: results[0].url,
                    type: files[0].type,
                    pageBy: req.param('pageBy'),
                    width:req.param('width'),
                    height:req.param('height')

                }, function (err, data) {
                    if (err) return next(err);
                    sails.log("資料庫存完");
                    return res.redirect('/edit?id=' + req.param('pageBy'));
                });

            }
        );


    }


};