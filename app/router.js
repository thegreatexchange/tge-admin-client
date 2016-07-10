import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', { path: 'sign-in' });
  this.route('contacts', function() {
    this.route('new');
    this.route('contact', { path: '/:contact_id' });
  });
  this.route('events');
  this.route('users', function() {
    this.route('new');
    this.route('user', { path: '/:user_id' });
  });
});

export default Router;
