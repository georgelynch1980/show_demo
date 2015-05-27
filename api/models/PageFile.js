/**
 * PageFile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        title: {
            type: 'string',
            required: true,
        },
        type: {
            type: 'string',
            required: true,
        },
        path: {
            type: 'string',
            required: true,
        },
        width: {
            type: 'string',
            required: true,
        },
        height: {
            type: 'string',
            required: true,
        },
        pageBy: {
            model: 'page'
        }
        
    }
};