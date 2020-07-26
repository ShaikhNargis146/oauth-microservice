const { port, env } = require('./constants');
const app = require('./config/express.config');
const logger = require('./utils/logger')(__filename);

// listen to requests
app.listen(port, (err) => {
	if (err) {
		return logger.error('server failed to start ', err);
	}
	require('./config/mongo.config');
	return logger.info(`server started [env, port] = [${env}, ${port}]`);
});
// app.get('/*', function(req, res) {
// 	res.sendFile('/opt/bitnami/apps/myapp/htdocs/cms-frontend/build/ndex.html');
//   });

/**
 * Exports express
 * @public
 */
module.exports = app;
