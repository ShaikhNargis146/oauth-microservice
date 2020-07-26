const Joi = require('joi');

module.exports = {

	// POST /v1/unions/create
	save_union: {
		body: {
			name: Joi.string().required(),
			district: Joi.string().required(),
			district_id:Joi.string().required(),
			pincodes:Joi.array().required(),
			head_name: Joi.string().required(),
			registration_number:Joi.string().required(),
			establishment_year:Joi.number().optional(),
	        total_present_member:Joi.string().allow('').optional(),
			head_contact_no: Joi.string().allow('').optional(),
			activation_date:Joi.number().required(),
			'address.house_no':Joi.string().allow('').optional(),
			'address.plot_no':Joi.string().allow('').optional(),
			'address.sector':Joi.string().allow('').optional(),
			'address.street_name':Joi.string().allow('').optional(),
			'address.landmark':Joi.string().allow('').optional(),
			'address.state':Joi.string().allow('').optional(),
			'address.district':Joi.string().allow('').optional(),
			'address.pincode':Joi.string().allow('').optional()
		},
		query: {},
		param: {}
	},

	//GET /v1/unions/all?offset=0&limit=10
	get_unions: {
		param: {},
		query: {
			district:Joi.string().allow('').optional(),
			offset: Joi.number().optional(),
			limit: Joi.number().optional()
		},
		body: {}
	},

	//GET /v1/unions/get/:union
	get_union: {
		param: {
			union: Joi.string().required()
		},
		query: {},
		body: {}
	},

	//PUT /v1/unions/edit
	edit_union: {
		body: {
			_id: Joi.string().required(),
			name: Joi.string().optional(),
			district: Joi.string().optional(),
			district_id:Joi.string().optional(),
			pincodes:Joi.array().optional(),
			head_name: Joi.string().optional(),
			registration_number:Joi.string().optional(),
			establishment_year:Joi.number().optional(),
	        total_present_member:Joi.string().allow('').optional(),
			head_contact_no: Joi.string().allow('').optional(),
			activation_date:Joi.number().optional(),
			'address.house_no':Joi.string().allow('').optional(),
			'address.plot_no':Joi.string().allow('').optional(),
			'address.sector':Joi.string().allow('').optional(),
			'address.street_name':Joi.string().allow('').optional(),
			'address.landmark':Joi.string().allow('').optional(),
			'address.state':Joi.string().allow('').optional(),
			'address.district':Joi.string().allow('').optional(),
			'address.pincode':Joi.string().allow('').optional(),
			membership_allowed:Joi.string().optional()
		},
		query: {},
		param: {}
	},

	//PUT /v1/unions/remove
	remove_union: {
		body: {
			_id: Joi.string().required()
		},
		query: {},
		param: {}
	},

	//GET /v1/unions/counts
	count: {
		body: {
			_id: Joi.string().required()
		},
		query: {},
		param: {}
	}

};