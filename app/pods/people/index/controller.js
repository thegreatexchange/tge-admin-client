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
    }
  }
  ////////////////////////////////////////
});
