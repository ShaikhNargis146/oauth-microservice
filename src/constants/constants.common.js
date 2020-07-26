/**
 * Common constants across all the environments (dev, staging, prod)
 */
module.exports = {
	env: process.env.NODE_ENV,
	port: process.env.PORT,
	database: 
	{
		uri:process.env.DATABASE
// 		uri:'mongodb://34.93.77.209:27017/pura'
	// 	// uri:'mongodb://localhost:27017/pura'
	}
};
