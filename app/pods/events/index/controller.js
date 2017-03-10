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

  list: Ember.computed('model.@each.name', 'filterText', function() {
    let sortedList = this.get('model').sortBy('startsAt');
    return sortedList.filter( (e) => {
      let propertyMap = `${e.get('name')}`;
      return propertyMap.toLowerCase().indexOf(this.get('filterText').toLowerCase()) !== -1;
    });
  }),

  isClearFilterDisabled: Ember.computed('filterText', function(){ return !this.get('filterText'); }),

  resetProperties: function() {
    this.set('filterText', '');
  },
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    new() {
      this.transitionToRoute('events.new');
    },
    edit(event) {
      this.transitionToRoute('events.event', event);
    },
    clearFilter() {
      this.set('filterText', '');
    }
  }
  ////////////////////////////////////////
});


