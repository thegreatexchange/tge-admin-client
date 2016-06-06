import Ember from 'ember';

export default Ember.Controller.extend({

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  showHelpMessage: true,
  outletActive:    false,

  users: [
      { email: 'user1@example.com',  name: 'User One'},
      { email: 'user2@example.com',  name: 'User Two'},
      { email: 'user3@example.com',  name: 'User Three'},
      { email: 'user4@example.com',  name: 'User Four'},
      { email: 'user5@example.com',  name: 'User Five'},
      { email: 'user6@example.com',  name: 'User Six'},
      { email: 'user7@example.com',  name: 'User Seven'},
      { email: 'user8@example.com',  name: 'User Eight'},
      { email: 'user9@example.com',  name: 'User Nine'},
      { email: 'user10@example.com', name: 'User Ten'},
      { email: 'user11@example.com', name: 'User Eleven'},
      { email: 'user12@example.com', name: 'User Twelve'},
      { email: 'user13@example.com', name: 'User Thirteen'},
      { email: 'user14@example.com', name: 'User Fourteen'},
      { email: 'user15@example.com', name: 'User Fifteen'},
      { email: 'user16@example.com', name: 'User Sixteen'},
      { email: 'user17@example.com', name: 'User Seventeen'},
      { email: 'user18@example.com', name: 'User Eighteen'},
      { email: 'user19@example.com', name: 'User Nineteen'},
      { email: 'user20@example.com', name: 'User Twenty'},
  ],

  resetProperties: function() {
    this.set('showHelpMessage', true);
    this.set('outletActive',    false);
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
    }
  }
  ////////////////////////////////////////

});
