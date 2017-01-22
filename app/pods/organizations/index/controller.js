import BaseController from '../../../controllers/base';

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
    let sortedList = this.get('model').sortBy('name');
    return sortedList.filter( (o) => {
      let propertyMap = `${o.get('name')}`;
      return propertyMap.toLowerCase().indexOf(this.get('filterText').toLowerCase()) !== -1;
    });
  }),

  isClearFilterDisabled: Ember.computed('filterText', function(){ return !this.get('filterText') }),

  resetProperties: function() {
    this.set('filterText', '');
  },
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    new() {
      this.transitionToRoute('organizations.new');
    },
    edit(organization) {
      this.transitionToRoute('organizations.organization', organization);
    },
    clearFilter() {
      this.set('filterText', '');
    }
  }
  ////////////////////////////////////////
});

