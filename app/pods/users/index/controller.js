import BaseController from '../../../controllers/base';
import Ember from 'ember';

export default BaseController.extend({

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  filterText: null,

  resetProperties: function() {
    this.set('filterText', null);
  },
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Computed Properties
  ////////////////////////////////////////
  filteredAndSortedList: Ember.computed('model.@.name', 'model.length', 'filterText', function(){
    var list, _this = this;
    list = this.get('model');
    if (this.get('filterText')) {
      list = list.filter(function(item) {
        var regex = new RegExp(_this.get('filterText'), 'i');
        return regex.test(item.get('name'));
      });
    }
    return list.sortBy('name');
  }),
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    new: function() {
      this.transitionToRoute('users.new');
    },
    show: function(user) {
      this.transitionToRoute('users.user', user);
    },
    clearFilter: function(){
      this.set('filterText', null);
    }
  }
  ////////////////////////////////////////

});
