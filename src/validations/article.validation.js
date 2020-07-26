const Joi = require('joi');

module.exports = {

	// POST /v1/articles/create
	save_article: {
		body: {
			article_type: Joi.string().required(),
			article_img:Joi.string().allow('').optional(),
			posted_date: Joi.date().required(),
			postedBy: Joi.string().allow('').required(),
			member_id: Joi.string().allow('').optional(),
			title: Joi.string().required(),
			content: Joi.string().required(),
		},
		query: {},
		param: {}
	},

	//GET /v1/articles/all?offset=0&limit=10
	get_articles: {
		param: {},
		query: {
			offset: Joi.number().required(),
			limit: Joi.number().required()
		},
		body: {}
	},

	//GET /v1/articles/get/:article
	get_article: {
		param: {
			article: Joi.string().required()
		},
		query: {},
		body: {}
	},

	//PUT /v1/articles/edit
	edit_article: {
		body: {
			_id: Joi.string().required(),
			article_type: Joi.string().required(),
			article_img:JJoi.string().allow('').optional(),
			posted_date: Joi.date().required(),
			postedBy: Joi.string().allow('').optional(),
			member_id: Joi.string().allow('').optional(),
			title: Joi.string().required(),
			content: Joi.string().required(),
			links: Joi.string().allow('').optional(),
			like: Joi.string().allow('').optional(),
			dislike: JJoi.string().allow('').optional(),

		},
		query: {},
		param: {}
	},

	//PUT /v1/articles/remove
	remove_article: {
		body: {
			_id: Joi.string().required()
		},
		query: {},
		param: {}
	},

	

};