/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    create: function (req, res, next) {
        var params = req.params.all();

        Project.create(params, function (err, data) {
            if (err) return next(err);
            Project.find({
                sort: 'id DESC'
            }).exec(function (err, projects) {
                //sails.log(projects);
                return res.view('project', {
                    projects: projects,
                    layout: 'layout'
                });
            });

        });

    },
    find: function (req, res) {
        /*
        var mongodb = require('mongodb');
        var seedData = [
            {
                decade: '1970s',
                artist: 'Debby Boone',
                song: 'You Light Up My Life',
                weeksAtOne: 10
  },
            {
                decade: '1980s',
                artist: 'Olivia Newton-John',
                song: 'Physical',
                weeksAtOne: 10
  },
            {
                decade: '1990s',
                artist: 'Mariah Carey',
                song: 'One Sweet Day',
                weeksAtOne: 16
  }
];

        // Standard URI format: mongodb://[dbuser:dbpassword@]host:port/dbname

        var uri = 'mongodb://heroku_fmrf6vgj:m2g19il1fnussj3627vbtvojl3@ds045622.mongolab.com:45622/heroku_fmrf6vgj';

        mongodb.MongoClient.connect(uri, function (err, db) {

            if (err) throw err;


            var songs = db.collection('songs');


            songs.insert(seedData, function (err, result) {

                if (err) throw err;


                songs.update({
                        song: 'One Sweet Day'
                    }, {
                        $set: {
                            artist: 'Mariah Carey ft. Boyz II Men'
                        }
                    },
                    function (err, result) {

                        if (err) throw err;

                        songs.find({
                            weeksAtOne: {
                                $gte: 10
                            }
                        }).sort({
                            decade: 1
                        }).toArray(function (err, docs) {

                            if (err) throw err;

                            docs.forEach(function (doc) {
                                console.log(
                                    'In the ' + doc['decade'] + ', ' + doc['song'] + ' by ' + doc['artist'] +
                                    ' topped the charts for ' + doc['weeksAtOne'] + ' straight weeks.'
                                );
                            });

                            songs.drop(function (err) {
                                if (err) throw err;

                                db.close(function (err) {
                                    if (err) throw err;
                                });
                            });
                        });
                    }
                );
            });
        });
        */
        //sails.log('project');
        Project.find({
            sort: 'id DESC'
        }).exec(function (err, projects) {
            //sails.log(projects);
            return res.view('project', {
                projects: projects,
                layout: 'layout'
            });
        });
    }

};