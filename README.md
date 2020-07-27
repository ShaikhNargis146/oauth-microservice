# oauth-microservice

First, you should have MongoDB installed and running on your machine.

You also need to install nodejs and npm and then, simply run npm install and npm start. The server should now be running at http://localhost:8080.

## For setting up example data:

You can call the loadExampleData function at model.js in order to create these entries automatically, and dump function to inspect the database content.

## Obtaining a token

To obtain a token you should POST to http://localhost:3000/oauth/token.

###### Headers

Authorization: "Basic " + clientId:clientSecret base64'd

(for example, to use application:secret, you should send Basic YXBwbGljYXRpb246c2VjcmV0)
Content-Type: application/x-www-form-urlencoded

###### Body

grant_type=password&username=nargis&password=password
(contains 3 parameters: grant_type, username and password)

curl http://localhost:3000/oauth/token \
	-d "grant_type=password" \
	-d "username=pedroetb" \
	-d "password=password" \
	-H "Authorization: Basic YXBwbGljYXRpb246c2VjcmV0" \
	-H "Content-Type: application/x-www-form-urlencoded"

###### If all goes as planned, you should receive a response like this:

{
	"accessToken": "951d6f603c2ce322c5def00ce58952ed2d096a72",
	"accessTokenExpiresAt": "2018-11-18T16:18:25.852Z",
	"refreshToken": "67c8300ad53efa493c2278acf12d92bdb71832f9",
	"refreshTokenExpiresAt": "2018-12-02T15:18:25.852Z",
	"client": {
		"id": "application"
	},
	"user": {
		"id": "pedroetb"
	}
}


## Using the token

Now, you can use your brand-new token to access restricted areas(internal microservices or secured routes). For example, you can GET to http://localhost:8080/device including your token at headers:

###### Headers

Authorization: "Bearer " + accessToken
(for example, Bearer 951d6f603c2ce322c5def00ce58952ed2d096a72)

###### For example, using curl:

curl http://localhost:8080/device \
	-H "Authorization: Bearer 951d6f603c2ce322c5def00ce58952ed2d096a72"

## Now for communicating between microservice using GRPC
 clone https://github.com/ShaikhNargis146/GRPC-nodejs.git and do npm i && npm start

 ###### This API http://localhost:8080/device will get data from above mentioned microservice using GRPC