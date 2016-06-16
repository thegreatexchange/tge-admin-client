import Ember from 'ember';

export default Ember.Controller.extend({
  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  showHelpMessage: true,
  outletActive:    false,
  filterText:      null,

  contacts: [
    { id: '1',  email: 'contact1@example.com', phone: '55512345678',  name: 'Contact One' },
    { id: '2',  email: 'contact2@example.com', phone: '55512345678',  name: 'Contact Two' },
    { id: '3',  email: 'contact3@example.com', phone: '55512345678',  name: 'Contact Three' },
    { id: '4',  email: 'contact4@example.com', phone: '55512345678',  name: 'Contact Four' },
    { id: '5',  email: 'contact5@example.com', phone: '55512345678',  name: 'Contact Five' },
    { id: '6',  email: 'contact6@example.com', phone: '55512345678',  name: 'Contact Six' },
    { id: '7',  email: 'contact7@example.com', phone: '55512345678',  name: 'Contact Seven' },
    { id: '8',  email: 'contact8@example.com', phone: '55512345678',  name: 'Contact Eight' },
    { id: '9',  email: 'contact9@example.com', phone: '55512345678',  name: 'Contact Nine' },
    { id: '10', email: 'contact10@example.com', phone: '55512345678', name: 'Contact Ten' },
    { id: '11', email: 'contact11@example.com', phone: '55512345678', name: 'Contact Eleven' },
    { id: '12', email: 'contact12@example.com', phone: '55512345678', name: 'Contact Twelve' },
    { id: '13', email: 'contact13@example.com', phone: '55512345678', name: 'Contact Thirteen' },
    { id: '14', email: 'contact14@example.com', phone: '55512345678', name: 'Contact Fourteen' },
    { id: '15', email: 'contact15@example.com', phone: '55512345678', name: 'Contact Fifteen' },
    { id: '16', email: 'contact16@example.com', phone: '55512345678', name: 'Contact Sixteen' },
    { id: '17', email: 'contact17@example.com', phone: '55512345678', name: 'Contact Seventeen' },
    { id: '18', email: 'contact18@example.com', phone: '55512345678', name: 'Contact Eighteen' },
    { id: '19', email: 'contact19@example.com', phone: '55512345678', name: 'Contact Nineteen' },
    { id: '20', email: 'contact20@example.com', phone: '55512345678', name: 'Contact Twenty' }
  ],

  sortedAndFilteredContacts: Ember.computed('contacts.@.name', 'contacts.length', 'filterText', function() {
    var list, _this = this;
    list = this.get('contacts');
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
      this.transitionToRoute('contacts.new');
    },
    show: function(contact) {
      this.transitionToRoute('contacts.contact', contact);
    },
    clearFilter: function(){
      this.set('filterText', null);
    }
  }
  ////////////////////////////////////////
});
