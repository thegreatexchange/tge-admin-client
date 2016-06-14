import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor('contacts').set('outletActive', true);
  },
  deactivate: function() {
    this.controllerFor('contacts').set('outletActive', false);
  }
});
