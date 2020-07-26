const express = require('express');

// import all the routes here
// const userRoutes = require('../../member/member.route');
const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => {
	// console.log('inside status');
	res.json({
		message: 'OK',
		timestamp: new Date().toISOString(),
		IP: req.ip,
		URL: req.originalUrl,
	});
});

// router.use('/user', userRoutes);

module.exports = router;
