# show_demo
# mongolab is's works
You want to save the actual connection definition in the either development.js or production.js and remove them from connections.js. It's a little non-intuitive.

development.js

module.exports = {
  connections : {
    mongoDev: {
      adapter: 'sails-mongo',
      host: 'localhost',
      port: 27017,
      user: 'username',
      password: 'password',
      database: 'database'
    }
  },
  models: {
    connection: 'mongoDev'
  }    
};

production.js

module.exports = {
  connections : {
    mongoLive: {
      adapter: 'sails-mongo',
      host: 'host.mongolab.com',
      port: 31681,
      user: 'user',
      password: 'password',
      database: 'database'
    } 
  },
  models: {
     connection: 'mongoLive'
  },
  port: 3000,
};

a [Sails](http://sailsjs.org) application
