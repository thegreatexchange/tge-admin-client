var VALID_DEPLOY_TARGETS = [ //update these to match what you call your deployment targets
  'development',
  'staging',
  'production'
];

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    redis: {
      allowOverwrite: true,
      keyPrefix:      'tge-admin-client:index'
    },
    s3: {
      prefix: process.env.S3_PREFIX
    }
  };
  if (VALID_DEPLOY_TARGETS.indexOf(deployTarget) === -1) {
    throw new Error('Invalid deployTarget ' + deployTarget);
  }

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    ENV.redis.url = process.env.REDIS_URL || 'redis://0.0.0.0:6379/';
  }

  if (deployTarget === 'staging' || deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.s3.accessKeyId     = process.env.AWS_S3_KEY;
    ENV.s3.secretAccessKey = process.env.AWS_S3_SECRET;
    ENV.s3.bucket          = process.env.AWS_S3_BUCKET;
    ENV.s3.region          = process.env.AWS_S3_REGION;
  }

  if (deployTarget === 'staging' || deployTarget === 'production') {
    ENV.redis.url = process.env.REDIS_URL;
  }

  return ENV;

  /* Note: a synchronous return is shown above, but ember-cli-deploy
   * does support returning a promise, in case you need to get any of
   * your configuration asynchronously. e.g.
   *
   *    var Promise = require('ember-cli/lib/ext/promise');
   *    return new Promise(function(resolve, reject){
   *      var exec = require('child_process').exec;
   *      var command = 'heroku config:get REDISTOGO_URL --app my-app-' + deployTarget;
   *      exec(command, function (error, stdout, stderr) {
   *        ENV.redis.url = stdout.replace(/\n/, '').replace(/\/\/redistogo:/, '//:');
   *        if (error) {
   *          reject(error);
   *        } else {
   *          resolve(ENV);
   *        }
   *      });
   *    });
   *
   */
}
