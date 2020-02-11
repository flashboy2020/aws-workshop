const removeAllApis = require('./cleaup-api-gateway');
const removeAllDatabases = require('./cleanup-dynamo-db');

// Load the SDK and UUID
var AWS = require('aws-sdk');

let regions = [
    'eu-north-1',
    'ap-south-1',
    'eu-west-3',
    'eu-west-2',
    'eu-west-1',
    'ap-northeast-2',
    'ap-northeast-1',
    'sa-east-1',
    'ca-central-1',
    'ap-southeast-1',
    'ap-southeast-2',
    'eu-central-1',
    'us-east-1',
    'us-east-2',
    'us-west-1',
    'us-west-2',
]

regions.forEach(region => {
    console.log(`Running for region ${region}`);
    AWS.config.region = region;
    console.log(AWS.config.region);
    
    removeAllApis(AWS);
    removeAllDatabases(AWS);
})
