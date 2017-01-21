import BaseController from '../../../controllers/base';

export default BaseController.extend({
  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  resetProperties: function() {
  },

  list: Ember.computed('model.@each.name', function() {
    return this.model.sortBy('name');
  }),
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
    }
  }
  ////////////////////////////////////////
});

