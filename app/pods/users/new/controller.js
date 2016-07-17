import Ember from 'ember';

export default Ember.Controller.extend({
  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  users: Ember.inject.controller('users'),
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    save: function() {
      var _this = this;
      this.get('model').save().then(function(){
        _this.get('users.model').addObject(_this.get('model'));
        _this.transitionToRoute('users');
      })
    },
    cancel: function() {
      this.transitionToRoute('users');
    }
  }
  ////////////////////////////////////////
});
