import BaseController from '../../../controllers/base';

export default BaseController.extend({

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  resetProperties: function() {
  },
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Computed Display Properties
  ////////////////////////////////////////
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
    }
  }
  ////////////////////////////////////////

});