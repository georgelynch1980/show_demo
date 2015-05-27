/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res, next) {

        var params = req.params.all();
        var projectId = req.param('projectBy');
        //sails.log(params);
        Page.create(params, function (err, data) {
            if (err) return next(err);

            Page.find({
                where: {
                    projectBy: projectId
                },
                sort: 'id DESC'
            }).exec(function (err, pages) {
                //sails.log(pages);
                return res.redirect('/page/?project=' + projectId);
            });

        });

    },
    find: function (req, res) {
        var projectId = req.param('project');

        Page.find({
            where: {
                projectBy: projectId
            },
            sort: 'id DESC'
        }).exec(function (err, pages) {
            //sails.log(pages);
            return res.view('page', {
                pages: pages,
                projectId: projectId,
                layout: 'layout'
            });
        });

    },
    destroy: function (req, res) {
        var id = req.param('id');
        //console.log(id)
        if (!id) {
            return res.badRequest('No id provided.');
        }

        Page.findOne(id, function (err, data) {
            if (data === undefined) return res.notFound();
            if (err) return next(err);
            var projectId=data.projectBy;
            Page.destroy(id, function (err) {
                if (err) return next(err);
                return res.redirect('/page/?project=' + projectId);
                //return res.json(data);
            });
        });
        
    }

};