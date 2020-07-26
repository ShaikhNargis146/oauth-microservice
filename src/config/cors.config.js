const httpStatus = require('http-status');
const cors = require('cors');

const APIError = require('../utils/APIError');

const options = {
	origin: (origin, callback) => {
		console.log("inside origin",origin);
		// In dev, allow these origins to access the API
		const whiteList = ['localhost', 'chrome-extension','34.93.77.209','union.paperking.in','15.206.23.66'];
		// We are doing string matching here.
		// For advanced use-case, use regex
		const index = whiteList.findIndex((aWhiteListedOrigin) => origin.includes(aWhiteListedOrigin));
		if (!origin || index !== -1) {
			callback(null, true);
		} else {
			const error = {
				message: `'${origin}' is not allowed to access the specified route/resource`,
				status: httpStatus.FORBIDDEN,
			};
			callback(new APIError(error), false);
		}
	},
	credentials: false,
};

module.exports = () => cors(options);
