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
    
    //models: {
        //connection: 'heroku_mongolab'
    //},

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
    connections: {
        heroku_mongolab: {
            adapter: 'sails-mongo',
            host: 'ds045622.mongolab.com',
            port: 45622,
            schema: 'true',
            user: 'heroku_fmrf6vgj',
            password: 'm2g19il1fnussj3627vbtvojl3',
            database: 'heroku_fmrf6vgj'
        }
    },
    models: {
        connection: 'heroku_mongolab'
    },
    port: 3000,

};