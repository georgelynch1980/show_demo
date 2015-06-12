/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

    /***************************************************************************
     * Set the default database connection for models in the production        *
     * environment (see config/connections.js and config/models.js )           *
     ***************************************************************************/
    /*
    models: {
        connection: 'heroku_mongolab'
    },
    */
    connections: {

        heroku_mongolab: {
            adapter: 'sails-mongo',
            //url:process.env.MONGOLAB_URI
            host: 'ds031912.mongolab.com',
            port: 31912,
            schema: 'true',
            user: 'heroku_874lbclz',
            password: '86po8r87dvgbm2a5grdr725dgf',
            database: 'heroku_874lbclz'
        }
    },
    models: {
        -connection: 'heroku_mongolab'
    },
    port: 3000,

    /***************************************************************************
     * Set the port in the production environment to 80                        *
     ***************************************************************************/

    // port: 80,

    /***************************************************************************
     * Set the log level in production environment to "silent"                 *
     ***************************************************************************/

    // log: {
    //   level: "silent"
    // }


};