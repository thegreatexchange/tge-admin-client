import Ember from 'ember';

export default Ember.Controller.extend({
  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  contacts: Ember.inject.controller('contacts'),
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    save: function() {
      this.get('contacts.contacts').addObject(this.get('model'));
      this.transitionToRoute('contacts');
    },
    cancel: function() {
      this.transitionToRoute('contacts')
    }
  }
  ////////////////////////////////////////
});
