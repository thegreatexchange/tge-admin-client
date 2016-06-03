/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    lessOptions: { paths: [ 'bower_components/bootstrap/less' ] }
  });

  app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
    destDir: 'fonts'
  });
  return app.toTree();
};
