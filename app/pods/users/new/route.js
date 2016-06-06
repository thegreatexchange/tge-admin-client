import Ember from 'ember';

export default Ember.Route.extend({

  activate: function() {
    this.controllerFor('users').set('outletActive', true);
  },
  deactivate: function() {
    this.controllerFor('users').set('outletActive', false);
  }
});
