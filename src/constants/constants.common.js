/**
 * Common constants across all the environments (dev, staging, prod)
 */
module.exports = {
	env: process.env.NODE_ENV,
	port: process.env.PORT,
	AKey:process.env.AKey,
	SAKey:process.env.SAKey,
	aws_basepath:'https://ums-files.s3.ap-south-1.amazonaws.com',
	Bucket:'ums-files',
	database: 
	{
		uri:process.env.DATABASE
// 		uri:'mongodb://34.93.77.209:27017/pura'
	// 	// uri:'mongodb://localhost:27017/pura'
	}
};
