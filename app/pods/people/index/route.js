import BaseRoute from '../../../routes/base';

export default BaseRoute.extend({
  ////////////////////////////////////////
  // Lifecycle hooks
  ////////////////////////////////////////
  model() {
    return this.store.findAll('person');
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('volunteers', this.store.peekAll('volunteer'));
  }
  ////////////////////////////////////////
});
