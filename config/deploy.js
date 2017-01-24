var VALID_DEPLOY_TARGETS = [
  'development',
  'staging',
  'production'
];

module.exports = function(deployTarget) {

  if (VALID_DEPLOY_TARGETS.indexOf(deployTarget) === -1) {
    throw new Error('Invalid deployTarget ' + deployTarget);
  }

  var ENV = {
    build: {},

    redis: {
      allowOverwrite: true,
      keyPrefix:      process.env.REDIS_KEY_PREFIX,
      url:            process.env.REDIS_URL
    },

    s3: {
      prefix:          process.env.S3_PREFIX,
      accessKeyId:     process.env.AWS_S3_KEY,
      secretAccessKey: process.env.AWS_S3_SECRET,
      bucket:          process.env.AWS_S3_BUCKET,
      region:          process.env.AWS_S3_REGION
    }
  };

  if (deployTarget === 'development') { ENV.build.environment  = 'development'; }
  if (deployTarget === 'staging')     { ENV.build.environment  = 'staging'; }
  if (deployTarget === 'production')  { ENV.build.environment  = 'production'; }

  return ENV;

}
