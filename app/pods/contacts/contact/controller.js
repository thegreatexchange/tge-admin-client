import Ember from 'ember';

export default Ember.Controller.extend({
  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    save: function() {
      this.transitionToRoute('contacts');
    },
    cancel: function() {
      this.transitionToRoute('contacts');
    }
  }
  ////////////////////////////////////////
});
