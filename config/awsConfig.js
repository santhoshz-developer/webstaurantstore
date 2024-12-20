const AWS = require("aws-sdk");
require("dotenv").config();
/**
 * Initialize AWS SDK with default configurations
 */
const configureAWS = () => {
  AWS.config.update({
    region: process.env.AWS_ACCESS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  return AWS; // Return configured AWS SDK
};

module.exports = configureAWS;
