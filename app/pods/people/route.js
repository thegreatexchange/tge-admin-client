import BaseRoute from '../../routes/base';

export default BaseRoute.extend({
  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  typeKey:            'person',
  unloadOnDeactivate: false,
  dependentTypeKeys:  [],
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Lifecycle hooks
  ////////////////////////////////////////
  afterModel() {
    return this.store.findAll('organization');
  },

  setupController(controller, model) {
    this._super(controller,model);
    controller.set('organizations', this.store.peekAll('organization'));
  }
  ////////////////////////////////////////
});
