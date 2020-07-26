const Joi = require('joi');

module.exports = {
	// POST /v1/districts/create
	save_district: {
		body: {
			name: Joi.string().required(),
			indian_district_id:Joi.string().required(),
			activation_date:Joi.date().empty('').allow(null).required(),
			unions_linked: Joi.array().optional(),
			member_count:Joi.number().optional(),
			district_managers_name:Joi.array().optional(),
			pincodes: Joi.array().required()
		},
		query: {},
		param: {}
	},

	//GET /v1/districts/all?offset=0&limit=10
	get_districts: {
		param: {},
		query: {
			offset: Joi.number().optional(),
			limit: Joi.number().optional()
		},
		body: {}
	},
	//GET /v1/districts/get/:district
	get_district: {
		param: {
			district: Joi.string().required()
		},
		query: {},
		body: {}
	},
	//PUT /v1/districts/edit
	edit_district: {
		body: {
			_id: Joi.string().required(),
			name: Joi.string().required(),
			indian_district_id:Joi.string().required(),
			activation_date:Joi.date().empty('').allow(null).optional(),
			unions_linked: Joi.array().optional(),
			member_count:Joi.number().optional(),
			district_managers_name:Joi.array().optional(),
			pincodes: Joi.array().optional(),
			isActive: Joi.boolean().optional(),
			createdAt: Joi.date().empty('').allow(null).optional(),
			updatedAt: Joi.date().empty('').allow(null).optional()

		},
		query: {},
		param: {}
	},

	//PUT /v1/districts/remove
	remove_district: {
		body: {
			_id: Joi.string().required()
		},
		query: {},
		param: {}
	},

	//GET /v1/distrcists/count
	get_counts: {
		param: {},
		query: {},
		body: {}
	},

	//GET /v1/districts/names
	get_district_names: {
		param: {},
		query: {},
		body: {}
	}
};