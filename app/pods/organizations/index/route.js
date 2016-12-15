import BaseRoute from '../../../routes/base';
import Ember     from 'ember';

export default BaseRoute.extend({
  ////////////////////////////////////////
  // Lifecycle hooks
  ////////////////////////////////////////
  model() {
    return Ember.RSVP.all([
             this.store.findAll('school'),
             this.store.findAll('ministry')
           ]);
  },

  setupController(controller, model) {
    this._super(controller, model);
    this.setOrganizations(controller);
  },
  ////////////////////////////////////////

  setOrganizations(controller) {
    controller.set('schools', this.store.peekAll('school'));
    controller.set('ministries', this.store.peekAll('ministry'));
  } 
});

