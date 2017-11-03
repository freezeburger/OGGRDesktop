'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Contact Schema
 */
var ContactSchema = new Schema({
	firstname: {
		type: String,
		default: '',
		required: 'Please fill Contact firstname',
		trim: true
	},
	lastname: {
		type: String,
		default: '',
		required: 'Please fill Contact lastname',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

ContactSchema.methods.schema = function schema () {
  return ContactSchema;
};

mongoose.model('Contact', ContactSchema);