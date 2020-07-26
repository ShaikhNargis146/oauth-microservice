const express = require('express');
const compress = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const tmp = require('tmp');
var path = require('path');
const { logs } = require('../constants');

// const session = require('./session.config');
const cors = require('./cors.config');
const clientLogs = require('./client-log.config');

const routes = require('../api/routes/v1');
const error = require('../middlewares/error');
OAuth2Server = require('oauth2-server'),
	Request = OAuth2Server.Request,
	Response = OAuth2Server.Response;
/**
 * Express instance
 * @public
 */
const app = express();

// TODO: Include CSRF middlewares here

// request logging. dev: console | production: file
app.use(morgan(logs));

// This middleware take care of the origin when the origin is undefined.
// origin is undefined when request is local
app.use((req, _, next) => {
	req.headers.origin = req.headers.origin || req.headers.host;
	next();
});

// CORS configuration
app.use(cors());

// parse body params and attache them to req.body
app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({ extended: true , limit: '20mb'}));

// gzip compression
app.use(compress());

// secure apps by setting various HTTP headers
app.use(helmet());

/**
 * App Configurations
 */

app.oauth = new OAuth2Server({
	model: require('../api/union/model'),
	accessTokenLifetime: 60 * 60,
	allowBearerTokensInQueryString: true
});
app.all('/oauth/token', obtainToken);
app.get('/', authenticateRequest, function(req, res) {
	client.getDetails({id: deviceId}, function(err, response) {
		console.log('device Details for device Id:',deviceId,'\n' ,response.message);
		res.send(response.message);
	 
	});
});

// mount api v1 routes
app.use('/api/v1', routes);
app.use('/api/client-log', clientLogs);

// app.use('/static', express.static(process.env.UPLOAD_PATH));


// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

// temporary files created using tmp will be deleted on UncaughtException
tmp.setGracefulCleanup();

//GRPC client setup

const PROTO_PATH = __dirname + '/../proto/device.proto';

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

let packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
let device_proto = grpc.loadPackageDefinition(packageDefinition).device;

  let client = new device_proto.Device('localhost:4500',
                                       grpc.credentials.createInsecure());
  let deviceId;
  if (process.argv.length >= 3) {
    deviceId = process.argv[2];
  } else {
    deviceId = 1;
  }
  
function obtainToken(req, res) {

	var request = new Request(req);
	var response = new Response(res);

	return app.oauth.token(request, response)
		.then(function(token) {

			res.json(token);
		}).catch(function(err) {

			res.status(err.code || 500).json(err);
		});
}

function authenticateRequest(req, res, next) {

	var request = new Request(req);
	var response = new Response(res);

	return app.oauth.authenticate(request, response)
		.then(function(token) {

			next();
		}).catch(function(err) {

			res.status(err.code || 500).json(err);
		});
}
module.exports = app;
