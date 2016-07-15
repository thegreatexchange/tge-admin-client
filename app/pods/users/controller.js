import Ember from 'ember';

export default Ember.Controller.extend({

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  showHelpMessage: true,
  outletActive:    false,
  filterText:      null,

  sortedAndFilteredUsers: Ember.computed('model.@.name', 'model.length', 'filterText', function() {
    var list, _this = this;
    list = this.get('users');
    if (this.get('filterText')) {
      list = list.filter(function(item) {
        var regex = new RegExp(_this.get('filterText'), 'i');
        return regex.test(item.name);
      });
    }
    return list.sortBy('name');
  }),

  resetProperties: function() {
    this.set('showHelpMessage', true);
    this.set('outletActive',    false);
    this.set('filterText',      null);
  },
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Computed Display Properties
  ////////////////////////////////////////
  listClassesXS: Ember.computed('outletActive', function() {
    if (this.get('outletActive')) {
      return "hidden-xs";
    } else {
      return "visible-xs col-xs-12";
    }
  }),

  listClasses: Ember.computed('outletActive', function() {
    if (this.get('outletActive')) {
      return "hidden-xs col-sm-4 col-scrollable";
    } else {
      return "hidden-xs col-sm-12";
    }
  }),
  ////////////////////////////////////////


  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    getStarted: function() {
      this.set('showHelpMessage', false);
    },
    new: function() {
      this.transitionToRoute('users.new');
    },
    show: function(user) {
      this.transitionToRoute('users.user', user);
    }
  }
  ////////////////////////////////////////

});
