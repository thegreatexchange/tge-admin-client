import BaseController from '../../../controllers/base';
import Ember from 'ember';

export default BaseController.extend({
  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  filterText: '',

  list: Ember.computed('model.@each.name', 'model.@each.email', 'filterText', function() {
    let sortedList = this.get('model').sortBy('name');
    return sortedList.filter( (p) => {
      let propertyMap = `${p.get('name')}${p.get('email')}`;
      return propertyMap.toLowerCase().indexOf(this.get('filterText').toLowerCase()) !== -1;
    });
  }),

  isClearFilterDisabled: Ember.computed('filterText', function(){ return !this.get('filterText'); }),

  resetProperties: function() {
    this.set('filterText', '');
  },
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Public Functions
  ////////////////////////////////////////
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    new() {
      this.transitionToRoute('people.new');
    },
    edit(person) {
      this.transitionToRoute('people.person', person);
    },
    clearFilter() {
      this.set('filterText', '');
    }
  }
  ////////////////////////////////////////
});
