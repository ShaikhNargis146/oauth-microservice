const httpStatus = require('http-status');
const responses = require('./response.service');
const book_keeper = require('../utils/book_keeper');

module.exports = async(req, res, next) => {
	/**
	 * If the incoming request contains proper cookies,
	 * 'passport' module will parse the cookies and put the
	 * req.user object as the user logged in.
	 *
	 * Note however that this functionality is strictly limited to 'passport'
	 * module which is not included in this boilerplate code.
	 *
	 * Based on your api and session management configurations,
	 * you might want to check req.session.id ( in case of cookies )
	 * or req.headers['x-access-token'] and then validate the request
	 */
	if (req.headers.token) {
		const session_id = await book_keeper.get_all_messages_for_topic('user_token_'+req.headers.token);
		if(session_id.length>0){
			return next();
		}else{
			return res.status(httpStatus.UNAUTHORIZED).json(responses.sessionExpire());
		}
	}
	return res.status(httpStatus.UNAUTHORIZED).json(responses.notAuthenticated());
};
