import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('user', {password: 'password'});
  },
  activate: function() {
    this.controllerFor('users').set('outletActive', true);
  },
  deactivate: function() {
    this.controllerFor('users').set('outletActive', false);
  }
});
