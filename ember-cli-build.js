/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {

  var env = EmberApp.env()|| 'development';
  var isProductionLikeBuild = ['production'].indexOf(env) > -1;
  var fingerprintOptions = {
    enabled: true,
    extensions: ['js', 'css', 'png', 'jpg', 'gif']
  };
  switch (env) {
    case 'development':
      fingerprintOptions.prepend = 'http://localhost:4200/';
      break;
    case 'production':
      fingerprintOptions.prepend = 'https://s3.amazonaws.com/tge-assets/admin-client/production/';
      break;
  }

  var app = new EmberApp(defaults, {
    fingerprint: fingerprintOptions,
    emberCLIDeploy: {
      runOnPostBuild: (env === 'development') ? 'development-postbuild' : false,
      shouldActivate: true,
      activate: true
    },
    sourcemaps: {
      enabled: !isProductionLikeBuild,
    },
    minifyCSS: { enabled: isProductionLikeBuild },
    minifyJS:  { enabled: isProductionLikeBuild },

    lessOptions: { paths: [ 'bower_components/bootstrap/less', 'bower_components/jasny-bootstrap/less' ] }
  });

  app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  app.import(app.bowerDirectory + '/bootstrap/fonts/glyphicons-halflings-regular.woff', { destDir: '/fonts' });
  app.import(app.bowerDirectory + '/bootstrap/fonts/glyphicons-halflings-regular.woff2', { destDir: '/fonts' });
  return app.toTree();
};
