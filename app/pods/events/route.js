import BaseRoute from '../../routes/base';
import Ember     from 'ember';

export default BaseRoute.extend({
  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  typeKey:            'event',
  unloadOnDeactivate: true,
  // TODO: BDW - fix timing issue on unload.
  // dependentTypeKeys:  ['organization'],
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


