/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

    /***************************************************************************
     * Set the default database connection for models in the development       *
     * environment (see config/connections.js and config/models.js )           *
     ***************************************************************************/
    /*
    models: {
        //connection: 'localDiskDb'
        connection: 'heroku_mongolab_url'
    },*/
    connections: {
        heroku_mongolab_url: {
            adapter: 'sails-mongo',
            url: 'mongodb://heroku_8qfjzm61:ep7hqb7lvmrkgup87ffm531gks@ds047692.mongolab.com:47692/heroku_8qfjzm61'
        }
    },
    models: {
        connection: 'heroku_mongolab_url'
    }


};