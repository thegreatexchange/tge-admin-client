/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var env,
      isProdBuild,
      fingerprintOptions,
      app;

  env          = EmberApp.env() || 'development';
  isProdBuild  = ['production', 'qa'].indexOf(env) > -1;

  fingerprintOptions = {
    enabled:    true,
    extensions: [ 'js', 'css', 'png', 'jpg', 'gif' ]
  };

  switch(env) {
    case 'development':
      fingerprintOptions.prepend  = 'http://localhost:4200/';
      break;
    case 'qa':
     fingerprintOptions.prepend  = process.env.FINGERPRINT_PREPEND + 'qa/';
     break;
    case 'production':
     fingerprintOptions.prepend  = process.env.FINGERPRINT_PREPEND + 'production/';
     break;
  }

  app = new EmberApp(defaults, {
    fingerprint: fingerprintOptions,

    emberCLIDeploy: {
      // runOnPostBuild: (env === 'development') ? 'development-postbuild' : false,
      shouldActivate: true,
      activate:       true
    },

    sourcemaps: { enabled: !isProdBuild },
    minifyCSS:  { enabled: isProdBuild },
    minifyJS:   { enabled: isProdBuild },

    lessOptions: {
      paths: [
        'bower_components/bootstrap/less',
        'bower_components/jasny-bootstrap/less'
      ]
    }
  });

  ////////////////////////////////////////
  // Imports
  ////////////////////////////////////////
  app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  app.import(app.bowerDirectory + '/bootstrap/fonts/glyphicons-halflings-regular.woff', { destDir: '/fonts' });
  app.import(app.bowerDirectory + '/bootstrap/fonts/glyphicons-halflings-regular.woff2', { destDir: '/fonts' });
  ////////////////////////////////////////

  return app.toTree();
};
