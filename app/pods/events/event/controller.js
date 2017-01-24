import BaseController from '../../../controllers/base';

export default BaseController.extend({
  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  events: Ember.inject.controller('events'),
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
        this.transitionToRoute('events.index');
        message = model.get('name');
        message = message + ' has been updated successfully.';
        this.get('flashMessages').notifySuccess(message);
      });
    },
    cancel() {
      this.transitionToRoute('events.index');
    },
    organizationChanged(organization) {
      this.set('model.organization', organization);
    },
    destroy() {
      let name = this.get('model.name');
      let didConfirm = window.confirm(`Are you sure you want to remove ${name}?`);
      if (didConfirm){
        this.get('model').destroyRecord().then( () => {
          this.transitionToRoute('events.index');
          this.get('flashMessages').notifySuccess(`${name} has been removed.`);
        });
      }
    }
  }
  ////////////////////////////////////////
});




