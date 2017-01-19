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
  // Actions
  ////////////////////////////////////////
  actions: {
    save() {
      this.get('model').save().then((model) => {
        let message;
        this.transitionToRoute('organizations.index');
        message = model.get('name');
        message = message + ' has been updated successfully.';
        this.get('flashMessages').notifySuccess(message);
      });
    },
    cancel() {
      this.transitionToRoute('organizations.index');
    }
  }
  ////////////////////////////////////////
});



