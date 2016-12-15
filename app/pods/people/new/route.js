import BaseRoute from '../../../routes/base';

export default BaseRoute.extend({
  ////////////////////////////////////////
  // Lifecycle hooks
  ////////////////////////////////////////
  model() {
  },

  setupController(controller, model) {
    this._super(controller, model);
  }
  ////////////////////////////////////////
});

