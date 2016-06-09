import Ember from 'ember';

export default Ember.Controller.extend({

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  showHelpMessage: true,
  outletActive:    false,
  filterText:      null,

  users: [
    { id: '1',  email: 'user1@example.com',  name: 'User One' },
    { id: '2',  email: 'user2@example.com',  name: 'User Two' },
    { id: '3',  email: 'user3@example.com',  name: 'User Three' },
    { id: '4',  email: 'user4@example.com',  name: 'User Four' },
    { id: '5',  email: 'user5@example.com',  name: 'User Five' },
    { id: '6',  email: 'user6@example.com',  name: 'User Six' },
    { id: '7',  email: 'user7@example.com',  name: 'User Seven' },
    { id: '8',  email: 'user8@example.com',  name: 'User Eight' },
    { id: '9',  email: 'user9@example.com',  name: 'User Nine' },
    { id: '10', email: 'user10@example.com', name: 'User Ten' },
    { id: '11', email: 'user11@example.com', name: 'User Eleven' },
    { id: '12', email: 'user12@example.com', name: 'User Twelve' },
    { id: '13', email: 'user13@example.com', name: 'User Thirteen' },
    { id: '14', email: 'user14@example.com', name: 'User Fourteen' },
    { id: '15', email: 'user15@example.com', name: 'User Fifteen' },
    { id: '16', email: 'user16@example.com', name: 'User Sixteen' },
    { id: '17', email: 'user17@example.com', name: 'User Seventeen' },
    { id: '18', email: 'user18@example.com', name: 'User Eighteen' },
    { id: '19', email: 'user19@example.com', name: 'User Nineteen' },
    { id: '20', email: 'user20@example.com', name: 'User Twenty' }
  ],

  sortedAndFilteredUsers: Ember.computed('users.@.name', 'users.length', 'filterText', function() {
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
      this.transitionToRoute('users.user', user)
    }
  }
  ////////////////////////////////////////

});
