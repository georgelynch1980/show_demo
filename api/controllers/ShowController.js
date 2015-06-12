/**
 * ShowController
 *
 * @description :: Server-side logic for managing shows
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    find: function (req, res) {
        var projectId = req.param('projectBy');
        var pageId = req.param('pageId');

        var _pageId;
        var pages;
        //sails.log(projectId);
        Page.find({
            where: {
                projectBy: projectId
            }
        }).exec(function (err, pages) {
            //sails.log(pages);
            pages = pages;
            if (!pageId) {
                if (pages.length > 0) {
                    _pageId = pages[0].id;
                } else {
                    return res.notFound();
                }
            } else {
                _pageId = pageId;
            }

            PageFile.find({
                where: {
                    pageBy: _pageId
                }
            }).exec(function (err, files) {
                //sails.log(pages);

                if (!pageId) {
                    _pageId = pages[0].id;
                } else {
                    _pageId = pageId;
                }


                setInterval(function () {
                    http.get("https://tranquil-stream-8578.herokuapp.com/show?projectBy="+projectId);
                }, 300000); // every 5 minutes (300000)
                
                return res.view('show', {
                    pages: pages,
                    pagesId: _pageId,
                    projectId: projectId,
                    files: files,
                    layout: 'layout'
                });
            });

        });

    }
};