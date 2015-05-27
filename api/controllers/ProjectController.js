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
            Project.find({sort: 'id DESC' }).exec(function (err, projects) {
                //sails.log(projects);
                return res.view('project', {
                    projects: projects,
                    layout: 'layout'
                });
            });

        });

    },
    find: function (req, res) {
        //sails.log('project');
        Project.find( {sort: 'id DESC' }).exec(function (err, projects) {
            //sails.log(projects);
            return res.view('project', {
                projects: projects,
                layout: 'layout'
            });
        });
    }
    
};