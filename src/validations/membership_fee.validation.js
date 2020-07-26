const Joi = require('joi');

module.exports = {
	
	// POST /v1/fees/create
	save_membership: {
		body: {
			amount: Joi.number().required(),
			validity_in_month:Joi.number().required(),
			activation_date: Joi.number().required(),
			expiry_date: Joi.number().required()
		},
		query: {},
		param: {}
	},

	//GET /v1/fees/all?offset=0&limit=10
	get_memberships: {
		param: {},
		query: {
			offset: Joi.number().optional(),
			limit: Joi.number().optional()
		},
		body: {}
	},

	//GET /v1/fees/get/:fee
	get_membership: {
		param: {
			fee: Joi.string().required()
		},
		query: {},
		body: {}
	},

	//PUT /v1/fees/edit
	edit_membership: {
		body: {
			_id: Joi.string().required(),
			amount: Joi.number().required(),
			activation_date: Joi.date().required(),
			end_date: Joi.date().required(),
			isActive: Joi.boolean().optional()
		},
		query: {},
		param: {}
	},

	//PUT /v1/fees/remove
	remove_membership: {
		body: {
			_id: Joi.string().required()
		},
		query: {},
		param: {}
	}

};