const common = require('../constants/constants.common');
const AWS = require('aws-sdk');
AWS.config.setPromisesDependency(require('bluebird'));

//configuring the AWS environment
AWS.config.update({
    accessKeyId: common.AKey,
    secretAccessKey: common.SAKey
  });

var s3 = new AWS.S3();

module.exports = s3;