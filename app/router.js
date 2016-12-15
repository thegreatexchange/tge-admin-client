import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL:  config.rootURL
});

Router.map(function() {
  this.route('login', { path: 'sign-in' });
  this.route('users', function() {
    this.route('new');
    this.route('user', { path: '/:user_id' });
  });
  this.route('people', function() {
    this.route('new');
    this.route('person', { path: '/:person_id'});
  });
  this.route('organizations', function() {});
});

export default Router;
