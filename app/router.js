import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('contacts');
  this.route('events');
  this.route('users', function() {
    this.route('new');
  });
  this.route('landingPage', {path: '/'});
});

export default Router;
