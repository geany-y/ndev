/**
 * AdminTop.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt');

module.exports = {
	attributes: {
		auther: {
			type: 'id',
			required: true,
			unique: true
		},
		type: {
			type: 'number',
			required: true
		},
		body: {
			type: 'string',
			required: true
		},
		order: {
			type: 'number',
			required: true
		}
	}
};
