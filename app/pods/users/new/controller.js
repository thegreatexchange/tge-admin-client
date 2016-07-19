import Ember from 'ember';

export default Ember.Controller.extend({
  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  users: Ember.inject.controller('users.index'),
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    save: function() {
      var _this = this;
      this.get('model').save().then(function(){
        _this.transitionToRoute('users.index');
      });
    },
    cancel: function() {
      this.transitionToRoute('users');
    }
  }
  ////////////////////////////////////////
});
