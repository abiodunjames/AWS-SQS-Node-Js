require('dotenv').config()

const AWS = require("aws-sdk");
const credentials = new AWS.SharedIniFileCredentials({profile: process.env.YOUR_AWS_PROFILE});
AWS.config.credentials = credentials;
const sqs = new AWS.SQS({ apiVersion: "2012-11-05",region:'eu-central-1'});
module.exports = sqs;
