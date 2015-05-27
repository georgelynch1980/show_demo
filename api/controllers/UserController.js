/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    login: function (req, res) {
        //User Host Address
        sails.log(req.headers.host);
        var password = req.param('password');
        if (password == 'george') {
            sails.log('login');
            req.session.islogin = true;
            return res.redirect("/project");
        } else {
            return res.view('user/login', {message: 'Login failed!', layout: 'layout'});
        }
    },
    logout: function (req, res) {
        req.session.islogin = false;
        return res.redirect('/');
    }
};