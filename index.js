const boxSDK = require('box-node-sdk');  // Box SDK
const fs = require('fs');                // File system for config

// Fetch config file for instantiating SDK instance
const configJSON = JSON.parse(fs.readFileSync('101781222_8tvayzvw_config.json'));

// Instantiate instance of SDK using generated JSON config
const sdk = boxSDK.getPreconfiguredInstance(configJSON);

// Create auth client
const client = sdk.getAppAuthClient('enterprise', configJSON.enterpriseId);

// PERFORM API ACTIONS WITH CLIENT
// Set upload values
const filePath = 'myinstapic.jpg';
const fileName = 'Abhinay';
const folderId = '0';

// Create file upload stream
const stream = fs.createReadStream(filePath);

// Upload file
client.files.uploadFile(
  folderId, 
  fileName, 
  stream, 
  callback);

function callback(err, res) {
  // HANDLE ERROR CASE AND RESPONSE
console.log(err);

  
}
