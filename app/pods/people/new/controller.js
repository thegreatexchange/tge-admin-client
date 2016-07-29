import BaseController from '../../../controllers/base';
import Ember          from 'ember';

export default BaseController.extend({
  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  users: Ember.inject.controller('people.index'),
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    save: function() {
      var _this = this;
      this.get('model').save().then(function(){
        _this.transitionToRoute('people.index');
      });
    },
    cancel: function() {
      this.transitionToRoute('people');
    }
  }
  ////////////////////////////////////////
});
