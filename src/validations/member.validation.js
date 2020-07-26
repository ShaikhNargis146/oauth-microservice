const Joi = require('joi');

const validate_member_edit = (req) => {
	if (req.body.is_suspended == true || req.body.is_suspended == false) {
		return this.suspend;
	} else if (req.body.dm_approved_status) {
		return this.dm_approval;
	} else if (req.body.head_approved_status) {
		return this.head_approval
	} else if (req.body.is_dm == true || req.body.is_dm == false) {
		return this.dm_add;
	} else if (req.body.is_renew) {
		return this.renew;
	} else {
		return this.edit_member;
	}
}

module.exports = {
	// POST /v1/members/create
	save_member: {
		body: {
			personal_details: {
				first_name: Joi.string().required(),
				middle_name: Joi.string().allow('').optional(),
				last_name: Joi.string().required(),
				mobile: Joi.string().required(),
				email_id: Joi.string().allow('').optional(),
				dob: Joi.date().required(),
				salutation: Joi.string().allow('').required(),
				qualification: Joi.string().allow('').optional(),
				aadhar_no: Joi.string().allow('').required(),
				aadhar_image: Joi.string().allow('').optional(),
				aadhar_image_name: Joi.string().allow('').optional(),
				pan_no: Joi.string().allow('').required(),
				pan_image: Joi.string().allow('').optional(),
				pan_image_name: Joi.string().allow('').optional(),
				profile_image: Joi.string().allow('').required(),
				profile_image_name: Joi.string().allow('').optional(),
			},
			family_details: {
				family_member_count: Joi.number().empty('').allow(null).required(),
				only_earning: Joi.string().allow('').required(),
				total_family_income: Joi.number().empty('').allow(null).required()
			},
			business_details: {
				agency_name: Joi.string().allow('').required(),
				agency_type: Joi.string().allow('').required(),
				total_distribution: Joi.string().allow('').required(),
				annual_income: Joi.string().allow('').required(),
			},
			address: {
				house_name: Joi.string().allow('').optional(),
				plot_no: Joi.string().allow('').optional(),
				sector: Joi.string().allow('').optional(),
				street: Joi.string().allow('').optional(),
				landmark: Joi.string().allow('').optional(),
				state: Joi.string().allow('').required(),
				district: Joi.string().allow('').required(),
				pincode: Joi.string().allow('').required(),
			},
			member_of_district: Joi.string().required(),
			pincode: Joi.string().required(),
			district_id: Joi.string().required(),
			secondary_unions: Joi.array().optional(),
			role: Joi.string().allow().optional(),
			terms_condition: Joi.boolean().required(),
			payment: {
				payment_type: Joi.string().allow('').optional(),
				amount: Joi.number().optional(),
				payment_approval_date: Joi.number().optional(),
				status: Joi.string().allow().optional(),
			},
			membership_id: Joi.string().required(),
			password: Joi.string().allow('').optional()
		},
		query: {},
		param: {}
	},

	//POST /v1/members/login
	login: {
		body: {
			username: Joi.string().required(),
			password: Joi.string().required()
		},
		query: {},
		param: {}
	},

	//GET /v1/members/all?type=active&offset=0&limit=10
	get_members: {
		param: {},
		query: {
			type: Joi.string().required(),
			offset: Joi.number().optional(),
			limit: Joi.number().optional()
		},
		body: {}
	},
	//GET /v1/members/get/:member
	get_member: {
		param: {
			member: Joi.string().required()
		},
		query: {},
		body: {}
	},
	//PUT /v1/members/edit
	edit_member: {
		body: {
			personal_details: {
				first_name: Joi.string().optional(),
				middle_name: Joi.string().allow('').optional(),
				last_name: Joi.string().optional(),
				mobile: Joi.string().optional(),
				email_id: Joi.string().allow('').optional(),
				dob: Joi.date().optional(),
				salutation: Joi.string().allow('').optional(),
				qualification: Joi.string().allow('').optional(),
				aadhar_no: Joi.string().allow('').optional(),
				aadhar_image: Joi.string().allow('').optional(),
				aadhar_image_name: Joi.string().allow('').optional(),
				pan_no: Joi.string().allow('').optional(),
				pan_image: Joi.string().allow('').optional(),
				pan_image_name: Joi.string().allow('').optional(),
				profile_image: Joi.string().allow('').optional(),
				profile_image_name: Joi.string().allow('').optional(),
			},
			family_details: {
				family_member_count: Joi.number().empty('').allow(null).optional(),
				only_earning: Joi.string().allow('').optional(),
				total_family_income: Joi.number().empty('').allow(null).optional()
			},
			business_details: {
				agency_name: Joi.string().allow('').optional(),
				agency_type: Joi.string().allow('').optional(),
				total_distribution: Joi.string().allow('').optional(),
				annual_income: Joi.string().allow('').optional(),
			},
			address: {
				house_name: Joi.string().allow('').optional(),
				plot_no: Joi.string().allow('').optional(),
				sector: Joi.string().allow('').optional(),
				street: Joi.string().allow('').optional(),
				landmark: Joi.string().allow('').optional(),
				state: Joi.string().allow('').optional(),
				district: Joi.string().allow('').optional(),
				pincode: Joi.string().allow('').optional(),
			},
			member_of_district: Joi.string().optional(),
			pincode: Joi.string().optional(),
			district_id: Joi.string().optional(),
			member_id: Joi.string().allow('').optional(),
			secondary_unions: Joi.array().optional(),
			role: Joi.string().allow().optional(),
			terms_condition: Joi.boolean().optional(),
			// activation_date: Joi.number().optional(),
			// expiry_date: Joi.number().optional(),
			status: Joi.string().allow('').optional(),
			payment: {
				payment_type: Joi.string().allow('').optional(),
				amount: Joi.number().optional(),
				payment_approval_date: Joi.number().optional(),
				status: Joi.string().allow('').optional()
			},
			membership_id: Joi.string().optional(),
			password: Joi.string().allow('').optional(),
		},
		query: {},
		param: {}
	},

	//PUT /v1/members/remove
	remove_member: {
		body: {
			_id: Joi.string().required()
		},
		query: {},
		param: {}
	},

	//GET /v1/members/count?type=active
	get_counts: {
		param: {},
		query: {
			type: Joi.string().required(),
		},
		body: {}
	},

	//GET /v1/members/dashboard
	dashboard: {
		param: {},
		query: {},
		body: {}
	},

	//GET /v1/members/payment
	payment: {
		param: {},
		query: {},
		body: {}
	},

	//GET /v1/members/payment
	expire_count: {
		param: {},
		query: {},
		body: {}
	},

	//GET /v1/members/filter
	filter: {
		param: {},
		query: {
			district: Joi.string().required(),
			city: Joi.string().allow('').optional(),
			pincode: Joi.string().allow('').optional()
		},
		body: {}
	},

	//GET /v1/members/search
	search: {
		param: {},
		query: {
			search: Joi.string().optional(),
			member_id: Joi.string().optional()
		},
		body: {}
	},

	suspend: {
		param: {},
		query: {},
		body: {
			_id: Joi.string().required(),
			is_suspended: Joi.boolean().required(),
		}
	},
	dm_approval: {
		param: {},
		query: {},
		body: {
			_id: Joi.string().required(),
			dm_approved_status: Joi.boolean().required()
		}
	},
	head_approval: {
		param: {},
		query: {},
		body: {
			_id: Joi.string().required(),
			head_approved_status: Joi.boolean().required(),

		}
	},
	dm_add: {
		param: {},
		query: {},
		body: {
			_id: Joi.string().allow('').required(),
			dm_pincodes: Joi.array().empty('').required(),
			dm_district_name: Joi.string().allow('').required(),
			dm_district_id: Joi.string().allow('').required(),
			dm_activation_date: Joi.date().optional(),
			dm_expiry_date: Joi.date().optional(),
			is_dm: Joi.boolean().required()
		}
	},
	renew: {
		param: {},
		query: {},
		body: {
			_id: Joi.string().required(),
			membership_id: Joi.string().required(),
			payment_mode: Joi.string().required()
		}
	},
};

module.exports.validate_member_edit = validate_member_edit;